
export interface AuthDatasource {
    login( username:string, password:string ):Promise<string>
    validate():Promise<void>
    logout():Promise<void>
}