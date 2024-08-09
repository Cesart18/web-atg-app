import React from 'react'
import { usePlayer } from '../../config/hooks/userPlayer'
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity'


interface PlayerRankingProps {
  isDouble: boolean
}

export const PlayerRanked: React.FC<PlayerRankingProps>  = ({ isDouble }) => {
    const { players } = usePlayer()
    const sortedPlayers = isDouble ? players.sort((a, b) => b.doublePoints - a.doublePoints)
    : players.sort((a, b) => b.singlePoints - a.singlePoints)
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
      {sortedPlayers.map((p) => {
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
