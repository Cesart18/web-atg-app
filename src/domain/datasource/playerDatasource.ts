import { PlayerModel } from "../models/playerModel"


export interface PlayerDatasource {
    createPlayer( name:string ): Promise<void>
    getPlayers(): Promise<PlayerModel[]>
    getPlayerById( id:number ): Promise<PlayerModel>
    updatePlayer( newName:string ): Promise<void>
    togglePayedBalls( id: number ): Promise<void>;
    toggleMemberShip( id: number ): Promise<void>;
    addMatch( ids:number[], score: string ): Promise<void>
    deletePlayer(id:number): Promise<void>
}