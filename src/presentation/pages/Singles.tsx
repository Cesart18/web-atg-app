import { PlayerModel } from "../../domain/models/playerModel";
import { NewMatchForm } from "../components/NewMatchForm";
import { PlayerRanked } from "../components/PlayerRanked";

interface Props {
  players: PlayerModel[];
  isLogged: boolean
}

export const Singles: React.FC<Props> = ({ players, isLogged }) => {
  const sortedPlayers = players.sort((a, b) => b.singlePoints - a.singlePoints)
  return (
    <div className="home">
      <h1>Ranking singles</h1>
      { isLogged && <NewMatchForm isDouble={false} /> }
      <PlayerRanked isDouble={false} players={sortedPlayers}/>
      
    </div>
  )
}
