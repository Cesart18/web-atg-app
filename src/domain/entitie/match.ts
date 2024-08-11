import { MatchPlayer } from './matchPlayer';
interface MatchConstructorParams {
  id: number;
  score: string;
  matchType: string;
  matchPlayers: MatchPlayer[] | null;
  date: string;
}

export class Match {
    id: number;
    score: string;
    matchType: string;
    matchPlayers: MatchPlayer[] | null;
    date: string;

    constructor({ id, score, matchType, date, matchPlayers }:MatchConstructorParams){
        this.id = id;
        this.score = score;
        this.matchType = matchType;
        this.matchPlayers = matchPlayers;
        this.date = date
    }
}
