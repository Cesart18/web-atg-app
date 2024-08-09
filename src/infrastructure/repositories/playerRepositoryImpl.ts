import { urlApi } from "../../config/constant/constant"
import { PlayerDatasource } from "../../domain/datasource/playerDatasource"
import { PlayerModel } from "../../domain/models/playerModel"
import { PlayerRepository } from "../../domain/repositories/playerRepository"
import { PlayerDatasourceImpl } from "../datasource/playerDatasourceImpl"


export class PlayerRepositoryImpl implements PlayerRepository{

    private datasource : PlayerDatasource
    constructor( datasource:PlayerDatasource ){
        
        this.datasource = datasource ?? new PlayerDatasourceImpl(urlApi ?? "")
    }

    createPlayer(name: string): Promise<void> {
        return this.datasource.createPlayer(name)
    }
    getPlayers(): Promise<PlayerModel[]> {
        return this.datasource.getPlayers()
    }
    updatePlayer(newName: string): Promise<void> {
        return this.datasource.updatePlayer(newName)
    }
    plusDoublePoints(): Promise<void> {
        return this.datasource.plusDoublePoints()
    }
    minusDoublePoints(): Promise<void> {
        return this.datasource.minusDoublePoints()
    }
    plusSinglePoints(): Promise<void> {
        return this.datasource.plusSinglePoints()
    }
    minusSinglePoints(): Promise<void> {
        return this.datasource.minusSinglePoints()
    }

}