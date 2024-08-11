import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { usePlayer } from "../../config/hooks/userPlayer";
import { playerModelToEntity } from "../../infrastructure/mappers/playerModelToEntity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "./Modal";

interface PlayerTableProps {
    isLogged: boolean

  }


export const PlayerTable: React.FC<PlayerTableProps>  = ({ isLogged }) => {
    const { players, deletePlayer, toggleMemberShip, togglePayedBalls } = usePlayer();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playerToDelete, setPlayerToDelete] = useState<number | null>(null);
    const player = players.find((p) => p.ID == playerToDelete)
    const handleDeleteClick = (playerId: number) => {
        setPlayerToDelete(playerId);
        setIsModalOpen(true);
    };

    const handleConfirmDelete =  () => {
        if (playerToDelete !== null) {
            deletePlayer(playerToDelete); // Llama a la función de eliminación
            setPlayerToDelete(null);
        }
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setPlayerToDelete(null);
    };

    return (
        <>
        <div className="table-container">
        <table className="player-table">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Membresia</th>
                <th>Pelotas</th>
                {isLogged && <th></th>}
                </tr>
            </thead>
            <tbody>
                {
                    players.map((player) => {
                        const p = playerModelToEntity(player);
                        return (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td className={`${(!p.isMembershipValid && !isLogged) ? 'red' : ''}`} >{isLogged ? 
                                    <button onClick={() => toggleMemberShip(p.id)}  className={`btn-primary ${p.isMembershipValid ? '' : 'red'}`}>{p.isMembershipValid ? 
                                    'Cancelado' : 'Sin pagar'}</button> : p.isMembershipValid ? 
                                    'Cancelado' : 'Sin pagar'}</td>

                                <td className={`${(!p.isPayedBalls && !isLogged) ? 'red' : ''}`}>
                                {isLogged ? 
                                    <button onClick={() => togglePayedBalls(p.id)}  className={`btn-primary ${p.isPayedBalls ? '' : 'red'}`}>{p.isPayedBalls ? 
                                    'Cancelado' : 'Sin pagar'}</button> : p.isPayedBalls ? 
                                    'Cancelado' : 'Sin pagar'}
                                </td>
                                {isLogged && <td><FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteClick(p.id)}
                                className="alert-btn"></FontAwesomeIcon></td>}
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        <Modal
                title="Confirmar eliminacion"
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                message={`¿Estás seguro de que deseas eliminar a: `}
                name={`${player?.name}?`}
            />

        </>
    );
}
