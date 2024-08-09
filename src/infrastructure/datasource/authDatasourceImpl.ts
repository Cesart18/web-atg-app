import { urlApi } from "../../config/constant/constant";
import { AuthDatasource } from "../../domain/datasource/authDatasource";


export class AuthDatasourceImpl implements AuthDatasource{
    async login(username: string, password: string): Promise<string> {
        const resp = await fetch(`${urlApi}/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({username,password}),
        });

        if (!resp.ok){
            const errorData = await resp.json();
            throw new Error(errorData);

        }
        
        const data = await resp.json();
        return data["token"];

    }
    async validate(): Promise<void> {
        const token = localStorage.getItem('token')
        const resp = await fetch(`${urlApi}/auth/validate`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ?? ''
              },
        });
        if (!resp.ok){
            const errorMessage = await resp.json()
            throw new Error(errorMessage)
        }
    }
    async logout(): Promise<void> {
        const token = localStorage.getItem('token')
        const resp = await fetch(`${urlApi}/auth/logout`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ?? ''
              },
              
            //   credentials: 'include' 
        });
        if (!resp.ok){
            const errorData = await resp.json();
            console.log(errorData)
            throw new Error(errorData);
        }
    }

}