import { useEffect, useState } from "react";
import { urlApi } from "../constant/constant";
import { PlayerModel } from "../../domain/models/playerModel";
import { PlayerDatasourceImpl } from "../../infrastructure/datasource/playerDatasourceImpl";
import { PlayerRepositoryImpl } from "../../infrastructure/repositories/playerRepositoryImpl";


const repository = new PlayerRepositoryImpl( new PlayerDatasourceImpl(urlApi ?? '') )
export const usePlayer = () => {
    const [players, setPlayers] = useState<PlayerModel[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
          try {
            const newPlayers = await repository.getPlayers();
            setPlayers(newPlayers);
          } catch (error) {
            setError('Failed to fetch players');
            console.error(error);
          }
        };
    
        fetchPlayers();
      }, []);
  return (
    {
        players,
        error
    } 
  )
}
