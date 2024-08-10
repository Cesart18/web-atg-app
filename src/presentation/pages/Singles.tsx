import { PlayerModel } from "../../domain/models/playerModel";
import { PlayerRanked } from "../components/PlayerRanked"

interface Props {
  players: PlayerModel[];
}

export const Singles: React.FC<Props> = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.singlePoints - a.singlePoints)
  return (
    <div>
      <PlayerRanked isDouble={false} players={sortedPlayers}/>
    </div>
  )
}
