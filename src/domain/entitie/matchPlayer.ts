import { Match } from "./match";

interface MatchPlayerConstructorParams {
    id:number;
    matchId: number;
    playerId: number;
    isWinner: boolean
    match: Match
}

export class MatchPlayer{
    id:number;
    matchId: number;
    playerId: number;
    isWinner: boolean;
    match: Match;

    constructor({id,matchId,playerId,isWinner, match}:MatchPlayerConstructorParams){
        this.id = id;
        this.matchId = matchId;
        this.playerId = playerId;
        this.isWinner = isWinner;
        this.match = match
    }
}