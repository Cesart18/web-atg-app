import React from 'react'
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity'
import { PlayerModel } from '../../domain/models/playerModel'
import { Link } from 'react-router-dom';


interface PlayerRankingProps {
  players: PlayerModel[];
  isDouble: boolean
}

export const PlayerRanked: React.FC<PlayerRankingProps>  = ({ isDouble, players }) => {
  return (
    <div className="table-container">
      <table>
    <thead>
      <tr>
        <th>Ranking</th>
        <th>Nombre</th>
        <th>Puntos</th>
      </tr>
    </thead>
    <tbody>
      {players.map((p) => {
        const player = playerModelToEntity(p);
        return (
          <Link to={`/players/${player.id}`}>
          <tr key={p.ID} className='details' >
            <td>{players.indexOf(p) + 1}</td>
            <td>{player.name}</td>
            <td>{isDouble? player.doublePoints : player.singlePoints }</td>
          </tr>
          </Link>
        );
      })}
    </tbody>
  </table>
    </div>
  )
}
