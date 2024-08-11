import { MatchPlayerModel } from "./matchPlayersModel";

export interface MatchModel {
    ID:           number;
    CreatedAt:    Date;
    UpdatedAt:    Date;
    DeletedAt:    null;
    score:        string;
    date:         string;
    matchType:    string;
    matchPlayers: MatchPlayerModel[] | null;
}