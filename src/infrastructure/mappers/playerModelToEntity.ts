import { Player } from "../../domain/entitie/player"
import { PlayerModel } from "../../domain/models/playerModel"
import { matchPlayerModelToEntity } from "./matchPlayerModelToEntity"



export const playerModelToEntity = ( player: PlayerModel ) => {
    return new Player({
        id: player.ID,
        name: player.name,
        doublePoints: player.doublePoints,
        isMembershipValid: player.isMembershipValid,
        singlePoints: player.singlePoints,
        isPayedBalls: player.isPayedBalls,
        lastUpdated: player.UpdatedAt,
        matchPlayers: player.matchPlayers.map((m) => {
            return matchPlayerModelToEntity(m)
        } ),
    })
}