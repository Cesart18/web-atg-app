import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
    name: string
    title: string
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, message, name, title }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay">
        <div className="modal">
            <h2>{title}</h2>
            <p>{message}<strong>{name}</strong></p>
            <div className="actions">
            <button className='alert-btn' onClick={onConfirm}>Eliminar</button>
            <button className='btn-secondary' onClick={onClose}>Cancelar</button>
            </div>
        </div>
    </div>

    );
};
