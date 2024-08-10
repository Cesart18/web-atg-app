import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay">
        <div className="modal">
            <h2>Confirmar Eliminación</h2>
            <p>{message}</p>
            <div className="actions">
            <button className='alert-btn' onClick={onConfirm}>Eliminar</button>
            <button className='btn-secondary' onClick={onClose}>Cancelar</button>
            </div>
        </div>
    </div>

    );
};
