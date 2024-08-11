import { MatchModel } from "./matchModel";

export interface MatchPlayerModel {
    ID:        number;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeletedAt: null;
    playerId:  number;
    matchId:   number;
    winner:    boolean;
    Match:     MatchModel;
}