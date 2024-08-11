import React, { useState } from 'react';
import { usePlayer } from '../../config/hooks/userPlayer';
import { Modal } from './Modal';

export const NewPlayerForm: React.FC = () => {
    const { createPlayer } = usePlayer();
    const [name, setName] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [confirmName, setConfirmName] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setConfirmName(name); // Establece el nombre para confirmar
        setIsModalOpen(true); // Abre el modal
    };

    const handleConfirm = () => {
        createPlayer(confirmName); // Crea el jugador
        setName(''); // Limpia el input
        setIsModalOpen(false); // Cierra el modal
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Cierra el modal sin hacer nada
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='new-player-form'>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nombre del jugador" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                />
                <button type="submit" className='btn-primary'>Agregar Jugador</button>
            </form>

            {isModalOpen && (
                <Modal
                title='Confirmar nuevo usuario'
                isOpen={isModalOpen}
                onClose={handleCancel}
                onConfirm={handleConfirm}
                message={`Está seguro de que desea agregar a: `}
                name={`${confirmName}?`}
            />
            )}
        </>
    );
};