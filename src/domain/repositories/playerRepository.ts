import { PlayerModel } from "../models/playerModel"


export interface PlayerRepository {
    createPlayer( name:string ): Promise<void>
    getPlayers(): Promise<PlayerModel[]>
    updatePlayer( newName:string ): Promise<void>
    plusDoublePoints(): Promise<void>
    minusDoublePoints(): Promise<void>
    plusSinglePoints(): Promise<void>
    minusSinglePoints(): Promise<void>
}