import { PlayerModel } from "../../domain/models/playerModel";
import { PlayerRanked } from "../components/PlayerRanked"

interface Props {
  players: PlayerModel[];
}


export const Doubles: React.FC<Props> = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.doublePoints - a.doublePoints)
  return (
    <div>
      <PlayerRanked isDouble={true} players={sortedPlayers}/>
    </div>
  )
}
