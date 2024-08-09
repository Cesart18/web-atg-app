/* eslint-disable @typescript-eslint/no-unused-vars */

import { HttpService } from "../../config/services/httpService";
import { PlayerDatasource } from "../../domain/datasource/playerDatasource";
import { PlayerModel } from "../../domain/models/playerModel";

const http = new HttpService()

export class PlayerDatasourceImpl implements PlayerDatasource{
    private urlApi:string
    constructor(urlApi:string){
        this.urlApi = urlApi
    }
    createPlayer(_name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getPlayers(): Promise<PlayerModel[]> {
        const url = `${this.urlApi}/api/players`
        const resp = await http.axios.get(url)
        const data = await resp.data;
        return data as PlayerModel[];
    }
    updatePlayer(_newName: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    plusDoublePoints(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    minusDoublePoints(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    plusSinglePoints(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    minusSinglePoints(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}