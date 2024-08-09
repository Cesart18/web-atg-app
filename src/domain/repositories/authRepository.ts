
export interface AuthRepository {
    login( username:string, password:string ):Promise<string>
    validate():Promise<void>
    logout():Promise<void>
}