import { usePlayer } from '../../config/hooks/userPlayer';

export const NewPlayerForm = () => {
    const { createPlayer } = usePlayer();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const name = event.currentTarget.elements.namedItem('name') as HTMLInputElement;
        createPlayer(name.value);
    };

    return (
        <form onSubmit={handleSubmit} className='new-player-form'>
            <input type="text" name="name" placeholder="Nombre del jugador" />
            <button type="submit" className='btn-primary'>Agregar Jugador</button>
        </form>
    );
};