import { PlayerModel } from "../../domain/models/playerModel";
import { NewMatchForm } from "../components/NewMatchForm";
import { PlayerRanked } from "../components/PlayerRanked"

interface Props {
  players: PlayerModel[];
  isLogged: boolean
}


export const Doubles: React.FC<Props> = ({ players, isLogged }) => {
  const sortedPlayers = players.sort((a, b) => b.doublePoints - a.doublePoints)
  return (
    <div className="home">
      <h1>Ranking dobles</h1>
      {
        isLogged && <NewMatchForm isDouble={true}/>
      }
      <PlayerRanked isDouble={true} players={sortedPlayers}/>
    </div>
  )
}
