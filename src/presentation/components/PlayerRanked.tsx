import React from 'react'
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity'
import { PlayerModel } from '../../domain/models/playerModel'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


interface PlayerRankingProps {
  players: PlayerModel[];
  isDouble: boolean
}

export const PlayerRanked: React.FC<PlayerRankingProps>  = ({ isDouble, players }) => {
  const navigate = useNavigate();

  const handleRowClick = (playerId: number) => {
    navigate(`/players/${playerId}`);
  };

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
          <tr key={p.ID} className='details' onClick={() => handleRowClick(player.id)} >
            <td>{players.indexOf(p) + 1}</td>
            <td className='info '>{player.name} <FontAwesomeIcon icon={faPlus} className='icon-btn' /></td>
            <td>{isDouble? player.doublePoints : player.singlePoints }</td>
          </tr>

        );
      })}
    </tbody>
  </table>
    </div>
  )
}
