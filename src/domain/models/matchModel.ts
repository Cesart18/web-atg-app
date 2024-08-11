import { MatchPlayer } from "../entitie/matchPlayer";

export interface MatchModel {
    ID:           number;
    CreatedAt:    Date;
    UpdatedAt:    Date;
    DeletedAt:    null;
    score:        string;
    date:         string;
    matchType:    string;
    matchPlayers: MatchPlayer[] | null;
}