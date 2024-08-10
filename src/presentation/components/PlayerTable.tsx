import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
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

    const handleDeleteClick = (playerId: number) => {
        setPlayerToDelete(playerId);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (playerToDelete !== null) {
            await deletePlayer(playerToDelete); // Llama a la función de eliminación
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
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Membresia</th>
                    <th>Pelotas</th>
                    {isLogged && <th></th>}
                </tr>
            </thead>
            <tbody>
                {players.map((p) => {
                    const player = playerModelToEntity(p);
                    return (
                        <tr key={player.id}>
                            <td>{player.name}</td>

                            <td >{player.isMembershipValid ? 'pagago' : 'no pagado'}
                                 {isLogged && <FontAwesomeIcon onClick={ () => toggleMemberShip(player.id) }
                                 className={`icon-btn ${player.isMembershipValid ? 'red' :'green'}`} icon={ player.isMembershipValid ? faX : faCheck} />
                                } </td>

                            <td>{player.isPayedBalls ? 'pagago' : 'no pagado'}
                            {isLogged && <FontAwesomeIcon onClick={() => togglePayedBalls(player.id)}
                            className={`icon-btn ${player.isPayedBalls ? 'red' :'green'}`} icon={ player.isPayedBalls ? faX : faCheck} />
                                }
                            </td>
                            {isLogged && <td><button className="alert-btn" onClick={ () => handleDeleteClick(player.id) }>Eliminar</button></td>}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                message="¿Estás seguro de que deseas eliminar este jugador?"
            />

        </>
    );
}
