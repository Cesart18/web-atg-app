import { createContext, ReactNode, useEffect, useState } from 'react';
import { urlApi } from "../config/constant/constant";
import { PlayerDatasourceImpl } from "../infrastructure/datasource/playerDatasourceImpl";
import { PlayerRepositoryImpl } from "../infrastructure/repositories/playerRepositoryImpl";
import { PlayerModel } from '../domain/models/playerModel';

interface PlayerContextType {
    players: PlayerModel[];
    createPlayer: ( name:string ) => void;
    updatePlayer: ( newName:string ) => void;
    togglePayedBalls: ( id: number ) => void;
    toggleMemberShip: ( id: number ) => void;
    addMatch: (ids: number[], score: string) => void;
    deletePlayer: ( id:number ) => void;
}

interface PlayerProviderProps{
    children: ReactNode;
  }

export const PlayerContext = createContext<PlayerContextType | null>(null);

const repository = new PlayerRepositoryImpl( new PlayerDatasourceImpl(urlApi ?? '') )

export const PlayerProvider: React.FC<PlayerProviderProps> = ({children}) => {
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    
    const fetchPlayers = async () => {
        try {
            const newPlayers = await repository.getPlayers();
            setPlayers(newPlayers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const createPlayer = async ( name:string ) =>{
        try {
            await repository.createPlayer(name);
            fetchPlayers();
        } catch (error) {
            console.error(error);
        }
    }

    const updatePlayer = () => {}
    const togglePayedBalls = async (id:number) => {
        try {
            await repository.togglePayedBalls(id)
            setPlayers((prevPlayers) => {
                return prevPlayers.map((player) => {
                    if ( player.ID === id ){
                        return {
                            ...player,
                            isPayedBalls: !player.isPayedBalls
                        };
                    }
                    return player;
                })
            })
            localStorage.setItem('players', JSON.stringify(players));

        } catch (error) {
            console.error('Error toggling membership:', error);
        }
    }
    const toggleMemberShip = async ( id: number) => {
        try {
            await repository.toggleMemberShip(id)
            setPlayers((prevPlayers) => {
                return prevPlayers.map((player) => {
                    if ( player.ID === id ){
                        return {
                            ...player,
                            isMembershipValid: !player.isMembershipValid
                        };
                    }
                    return player;
                })
            })
            localStorage.setItem('players', JSON.stringify(players));

        } catch (error) {
            console.error('Error toggling membership:', error);
        }
    }
    
    const deletePlayer = async ( id:number ) => {
        try {
            await repository.deletePlayer(id)
            fetchPlayers();
        } catch (error) {
            console.error(error)
        }
    }

    const addMatch = async ( ids: number[], score: string ) => {
        if (ids.length === 1 || ids.length === 3) return;
        try {
            await repository.addMatch(ids, score);
            fetchPlayers();
        } catch (error) {
            throw new Error('No se puede agregar el partido')
        }
    }

    return (
        <PlayerContext.Provider value={{
            players,
            createPlayer,
            updatePlayer,
            deletePlayer,
            togglePayedBalls,
            toggleMemberShip,
            addMatch
            }}>
            {children}
        </PlayerContext.Provider>
    );
}