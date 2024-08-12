import { useState } from 'react';
import { usePlayer } from '../../config/hooks/userPlayer';
import { playerModelToEntity } from '../../infrastructure/mappers/playerModelToEntity';

interface Props {
    isDouble: boolean
}

export const NewMatchForm: React.FC<Props> = ({ isDouble }) => {
  const [score, setScore] = useState('');

  const [winnerPlayerId, setWinnerPlayerId] = useState<number>(0);
  const [partnerPlayerId, setPartnerPlayerId] = useState<number>(0);
  const [firstOpponentId, setFirstOpponentId] = useState<number>(0);
  const [secondtOpponentId, setSecondOpponentId] = useState<number>(0);

  const { players, addMatch } = usePlayer();

  const playersEntity = players.map((p) => playerModelToEntity(p));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const ids = isDouble ? [winnerPlayerId, partnerPlayerId, firstOpponentId, secondtOpponentId]
    : [winnerPlayerId, firstOpponentId];

    const none = ids.some((i) => i === 0)
    if (none) {
      alert('Por favor seleccione todos los campos');
      return;
    };

    addMatch(ids,score)
    setWinnerPlayerId(0)
    setPartnerPlayerId(0)
    setFirstOpponentId(0)
    setSecondOpponentId(0)
    setScore('')
  };

  return (
    <form className='match-form' onSubmit={handleSubmit} >

        {/* Ganador */}
        <div className="select-container">
        <label htmlFor="winner">Ganador</label>
        <select value={winnerPlayerId} onChange={(e) => setWinnerPlayerId(Number(e.target.value))}
        name="winner" id="winner" required>
        <option value={0}>Seleccione...</option>
            {
                playersEntity.filter((p) => p.isMembershipValid).map((p) => <option key={p.id} value={p.id}>{p.name}</option>)
            }
        </select>
        
        </div>

            {/* partner  */}

      {
        isDouble &&   <div className="select-container">
        <label htmlFor="partner">Compañero</label>
        <select value={partnerPlayerId} onChange={(e) => setPartnerPlayerId(Number(e.target.value))}
        name="partner" id="partner">
          <option value={0}>Seleccione...</option>
            {
                playersEntity.filter((p) => p.isMembershipValid && p.id !== winnerPlayerId)
                .map((p) => (<option key={p.id} value={p.id}>{p.name}</option>))
            }
        </select>
        </div>
      }

        {/* primer oponente */}

        <div className="select-container">
        <label htmlFor="firstOpponent">1er Oponente</label>
        <select value={firstOpponentId} onChange={(e) => setFirstOpponentId(Number(e.target.value))}
        name="firstOpponent" id="firstOpponent" required>
        <option value={0}>Seleccione...</option>
            {
                playersEntity.filter((p) => p.isMembershipValid && p.id !== winnerPlayerId && p.id !== partnerPlayerId)
                .map((p) => (<option key={p.id} value={p.id}>{p.name}</option>))
            }
        </select>
        </div>

        {/* segundo oponente */}
       {
        isDouble &&  <div className="select-container">
        <label htmlFor="secondOpponent">2do Oponente</label>
        <select value={secondtOpponentId} onChange={(e) => setSecondOpponentId(Number(e.target.value))}
        name="secondOpponent" id="secondOpponent">
        <option value={0}>Seleccione...</option>
            {
                playersEntity.filter((p) => p.isMembershipValid && p.id !== winnerPlayerId && p.id !== partnerPlayerId && p.id !== firstOpponentId)
                .map((p) => (<option key={p.id} value={p.id}>{p.name}</option>))
            }
        </select>
        </div>
       }

        <div className="select-container">
        <label htmlFor="score">Puntaje</label>
        <input
          type="text"
          id='score'
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        </div>

        <button className='btn-primary' type="submit">Agregar</button>
    </form>
  );
};

