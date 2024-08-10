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
    plusDoublePoints: () => void;
    minusDoublePoints: () => void;
    plusSinglePoints: () => void;
    minusSinglePoints: () => void;
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
        // const cachedPlayers = localStorage.getItem('players');
        // const lastFetchTime = localStorage.getItem('lastFetchTime');
        const currentTime = Date.now();
        // const EXPIRATION_TIME = 10 * 60 * 1000;

        // if (cachedPlayers && lastFetchTime && (currentTime - parseInt(lastFetchTime) < EXPIRATION_TIME)) {
        //     setPlayers(JSON.parse(cachedPlayers));
        //     return;
        // }

        try {
            const newPlayers = await repository.getPlayers();
            setPlayers(newPlayers);
            localStorage.setItem('players', JSON.stringify(newPlayers));
            localStorage.setItem('lastFetchTime', currentTime.toString());
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
    const plusDoublePoints = () => {}
    const minusDoublePoints = () => {}
    const plusSinglePoints = () => {}
    const minusSinglePoints = () => {}
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

    return (
        <PlayerContext.Provider value={{
            players,
            createPlayer,
            updatePlayer,
            plusDoublePoints,
            minusDoublePoints,
            plusSinglePoints,
            minusSinglePoints,
            deletePlayer,
            togglePayedBalls,
            toggleMemberShip,
            }}>
            {children}
        </PlayerContext.Provider>
    );
}