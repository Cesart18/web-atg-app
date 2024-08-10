import { createContext, ReactNode, useEffect, useState } from 'react';
import { urlApi } from "../config/constant/constant";
import { PlayerDatasourceImpl } from "../infrastructure/datasource/playerDatasourceImpl";
import { PlayerRepositoryImpl } from "../infrastructure/repositories/playerRepositoryImpl";
import { PlayerModel } from '../domain/models/playerModel';

interface PlayerContextType {
    players: PlayerModel[];
    error: string | null;
}

interface PlayerProviderProps{
    children: ReactNode;
  }

export const PlayerContext = createContext<PlayerContextType | null>(null);

const repository = new PlayerRepositoryImpl( new PlayerDatasourceImpl(urlApi ?? '') )

export const PlayerProvider: React.FC<PlayerProviderProps> = ({children}) => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchPlayers = async () => {
            const cachedPlayers = localStorage.getItem('players');
            const lastFetchTime = localStorage.getItem('lastFetchTime');
            const currentTime = Date.now();
            const EXPIRATION_TIME = 10 * 60 * 1000;

            if (cachedPlayers && lastFetchTime && (currentTime - parseInt(lastFetchTime) < EXPIRATION_TIME)) {
                setPlayers(JSON.parse(cachedPlayers));
                return;
            }

            try {
                const newPlayers = await repository.getPlayers();
                setPlayers(newPlayers);
                localStorage.setItem('players', JSON.stringify(newPlayers));
                localStorage.setItem('lastFetchTime', currentTime.toString());
            } catch (error) {
                setError('Failed to fetch players');
                console.error(error);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <PlayerContext.Provider value={{players, error}}>
            {children}
        </PlayerContext.Provider>
    );
}