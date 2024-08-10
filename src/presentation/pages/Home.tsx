import { PlayerModel } from "../../domain/models/playerModel"
import { PlayerTable } from "../components/PlayerTable"

interface Props {
  players: PlayerModel[];
}

export const Home: React.FC<Props> = ({players}) => {
  return (
    <div>
      <PlayerTable players={players}/>
    </div>
  )
}
