import { Player } from "../../domain/entitie/player"
import { PlayerModel } from "../../domain/models/playerModel"



export const playerModelToEntity = ( player: PlayerModel ) => {
    return new Player({
        id: player.ID,
        name: player.name,
        doublePoints: player.doublePoints,
        isMembershipValid: player.isMembershipValid,
        singlePoints: player.singlePoints,
        isPayedBalls: player.isPayedBalls,
        lastUpdated: player.UpdatedAt
    })
}