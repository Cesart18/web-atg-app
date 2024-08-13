import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
    name: string
    title: string
    isDelete: boolean
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm, message, name, title, isDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay">
        <div className="modal">
            <h2>{title}</h2>
            <p>{message}<strong>{name}</strong></p>
            <div className="actions">
            <button className={`${ isDelete ? 'alert-btn' : 'btn-primary'}`} onClick={onConfirm}>{isDelete ? 'Eliminar' : 'Aceptar'}</button>
            <button className='btn-secondary' onClick={onClose}>Cancelar</button>
            </div>
        </div>
    </div>

    );
};
