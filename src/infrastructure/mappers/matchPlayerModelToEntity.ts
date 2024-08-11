import { MatchPlayer } from "../../domain/entitie/matchPlayer";
import { MatchPlayerModel } from "../../domain/models/matchPlayersModel";
import { matchModelToEntity } from "./matchModelToEntity";

export const matchPlayerModelToEntity = ( matchPlayer: MatchPlayerModel ): MatchPlayer => {
    const match = matchModelToEntity(matchPlayer.Match)
    return new MatchPlayer({
        id: matchPlayer.ID,
        isWinner: matchPlayer.winner,
        match: match,
        matchId: matchPlayer.matchId,
        playerId: matchPlayer.playerId
    })
}
