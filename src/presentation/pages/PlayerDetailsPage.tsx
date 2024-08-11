// src/presentation/pages/PlayerDetailsPage.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from '../../domain/entitie/player';
import { PlayerRepositoryImpl } from '../../infrastructure/repositories/playerRepositoryImpl';
import { PlayerDatasourceImpl } from '../../infrastructure/datasource/playerDatasourceImpl';
import { urlApi } from '../../config/constant/constant';
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity';

const repository = new PlayerRepositoryImpl( new PlayerDatasourceImpl(urlApi ?? '') )

export const PlayerDetailsPage = () => {
  const { id } = useParams(); // Obtener el ID del jugador de la URL
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      const playerData = await repository.getPlayerById(Number(id)); // Lógica para obtener los detalles del jugador
      setPlayer(playerModelToEntity(playerData));
    };

    fetchPlayerDetails();
  }, [id]);

  if (!player) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Puntos individuales: {player.singlePoints}</p>
      <p>Puntos dobles: {player.doublePoints}</p>
      <p>Membresía válida: {player.isMembershipValid ? 'Sí' : 'No'}</p>
      <p>Bolas pagadas: {player.isPayedBalls ? 'Sí' : 'No'}</p>
    </div>
  );
};