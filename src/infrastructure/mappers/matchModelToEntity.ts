import { Match } from "../../domain/entitie/match";
import { MatchModel } from "../../domain/models/matchModel";
import { matchPlayerModelToEntity } from "./matchPlayerModelToEntity";




export const matchModelToEntity = ( match: MatchModel ) => {
    return new Match({
        id: match.ID,
        date: match.date,
        matchPlayers: match.matchPlayers?.map((m) => matchPlayerModelToEntity(m)),
        matchType: match.matchType,
        score: match.score
    })
}
