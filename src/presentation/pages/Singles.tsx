import { PlayerModel } from "../../domain/models/playerModel";
import { PlayerRanked } from "../components/PlayerRanked";

interface Props {
  players: PlayerModel[];
}

export const Singles: React.FC<Props> = ({ players }) => {
  const sortedPlayers = players.sort((a, b) => b.singlePoints - a.singlePoints)
  return (
    <div className="home">
      <h1>Ranking singles</h1>
      <PlayerRanked isDouble={false} players={sortedPlayers}/>
      {/* {
        sortedPlayers.map((player) => {
          const p = playerModelToEntity(player);
          return <PlayerCard key={p.id} player={p} rank={sortedPlayers.indexOf(player) + 1} isDouble= {false} />
        })
      } */}
    </div>
  )
}
