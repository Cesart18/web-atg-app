
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from '../../domain/entitie/player';
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity';
import { PlayerModel } from '../../domain/models/playerModel';



interface Props{
  playersModel: PlayerModel[]
}

export const PlayerDetailsPage: React.FC<Props> = ({playersModel}) => {
  const { id } = useParams(); 
  const [player, setPlayer] = useState<Player | undefined>(undefined);
  const players = playersModel.map((p) => playerModelToEntity(p))


  useEffect(() => {
    const fetchPlayerDetails =  () => {
      const p = players.find((player) => player.id === Number(id) )
      setPlayer(p)
    };

    fetchPlayerDetails();
  }, [id]);

  if (!player) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='player-detail'>
      <div>
      <h2>{player.name}</h2>
      <p>Puntos individuales: {player.singlePoints}</p>
      <p>Puntos dobles: {player.doublePoints}</p>
      <p>Membresía válida: {player.isMembershipValid ? 'Sí' : 'No'}</p>
      <p>Bolas pagadas: {player.isPayedBalls ? 'Sí' : 'No'}</p>
      </div>
      <h2>Partidos</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Resultado</th>
            <th>Gano</th>
            <th>Fecha</th>
             <th>Compañero</th>
            <th>Adversario</th> 
          </tr>
        </thead>
        <tbody>
          {
            player.matchPlayers.map((mp) => {

              const playersMatch = mp.match.matchPlayers?.filter((p) => p.playerId != mp.playerId);
              const partnerMatch = playersMatch?.find((p) => p.isWinner == mp.isWinner);
              const opponentsMatch = playersMatch?.filter((p) => p.isWinner != mp.isWinner);

              const opponetsIds = opponentsMatch?.map((p) => p.playerId);
              
              
              const partner = players.find((p) => p.id == partnerMatch?.playerId);
              const opponents = players.filter((p) => opponetsIds?.includes(p.id));

              return <tr key={ mp.id }>
                <td>{mp.match.matchType}</td>
                <td>{mp.match.score}</td>
                <td>{mp.isWinner ? 'Si' : 'No'}</td>
                <td>{mp.match.date}</td>
                <td>{partner?.name}</td>
                <td>{opponents.length > 1?
                opponents?.map((op) => op.name).join(' /')
                : opponents?.map((p) => p.name)
                }</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};


