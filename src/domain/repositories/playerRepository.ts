import { PlayerModel } from "../models/playerModel"


export interface PlayerRepository {
    createPlayer( name:string ): Promise<void>
    getPlayers(): Promise<PlayerModel[]>
    updatePlayer( newName:string ): Promise<void>
    togglePayedBalls( id: number ): Promise<void>;
    toggleMemberShip( id: number ): Promise<void>;
    plusDoublePoints( id: number, points:number): Promise<void>
    minusDoublePoints( id: number, points:number): Promise<void>
    plusSinglePoints( id: number, points:number): Promise<void>
    minusSinglePoints( id: number, points:number): Promise<void>
    deletePlayer(id:number): Promise<void>
}