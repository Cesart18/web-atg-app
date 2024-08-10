import React from 'react'
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity'
import { PlayerModel } from '../../domain/models/playerModel'


interface PlayerRankingProps {
  players: PlayerModel[];
  isDouble: boolean
}

export const PlayerRanked: React.FC<PlayerRankingProps>  = ({ isDouble, players }) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Ranking</th>
        <th>Nombre</th>
        <th>{ isDouble ? 'Puntos de doble': 'Puntos de single' }</th>
      </tr>
    </thead>
    <tbody>
      {players.map((p) => {
        const player = playerModelToEntity(p);
        return (
          <tr key={p.ID}>
            <td>{players.indexOf(p) + 1}</td>
            <td>{player.name}</td>
            <td>{isDouble? player.doublePoints : player.singlePoints }</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
