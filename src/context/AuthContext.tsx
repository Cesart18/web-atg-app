import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthDatasourceImpl } from "../infrastructure/datasource/authDatasourceImpl";
import { AuthRepository } from "../domain/repositories/authRepository";
import { AuthRepositoryImpl } from "../infrastructure/repositories/authRepositoryImpl";
import { AuthContextType } from "../config/types/authTypes";


const authDatasource = new AuthDatasourceImpl()
const authRepository : AuthRepository = new AuthRepositoryImpl(authDatasource);


export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps{
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [ isLogged, setIsLogged ] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const login = async ( username:string, password:string ) => {
    try {
      const token = await authRepository.login(username, password);
      localStorage.setItem('token', token)
      setIsLogged(true)
    } catch (error) {
      throw new Error(error as string)
    }
  }

  const logout = async () => {
    console.log(isLoading)
   await authRepository.logout()
   localStorage.removeItem('token')
   setIsLogged(false)
  }

  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem('token')
      if (!token){
        setIsLogged(false)
        setIsLoading(false)
        return
      }
        try {
          await authRepository.validate();
          setIsLogged(true)
          setIsLoading(false);

        } catch (error) {
          localStorage.removeItem('token')
          setIsLogged(false)
          setIsLoading(false);
          console.error(error)
        }
    }
    validateUser();
  }, [])
  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}