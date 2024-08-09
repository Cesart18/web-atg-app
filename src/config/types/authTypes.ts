// export interface AuthContextType {
//     isAuthenticated: boolean,
//     login: () => void;
//     validate: () => void;
//     logout: () => void;
// }


export interface AuthContextType {
    isLogged: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  }
  
    