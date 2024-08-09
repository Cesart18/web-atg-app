import { AuthDatasource } from "../../domain/datasource/authDatasource";
import { AuthRepository } from "../../domain/repositories/authRepository";
import { AuthDatasourceImpl } from "../datasource/authDatasourceImpl";

export class AuthRepositoryImpl implements AuthRepository{
    private datasource : AuthDatasource
    constructor(datasource:AuthDatasource){
        this.datasource = datasource ?? new AuthDatasourceImpl()
    }
    login(username: string, password: string): Promise<string> {
        return this.datasource.login(username, password);
    }
    validate(): Promise<void> {
        return this.datasource.validate()
    }
    logout(): Promise<void> {
        return this.datasource.logout()
    }

}