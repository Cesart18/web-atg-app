import { Match } from "../../domain/entitie/match";
import { MatchModel } from "../../domain/models/matchModel";




export const matchModelToEntity = ( match: MatchModel ) => {
    return new Match({
        id: match.ID,
        date: match.date,
        matchPlayers: match.matchPlayers,
        matchType: match.matchType,
        score: match.score
    })
}
