import { PlayerModel } from "../../domain/models/playerModel";
import { playerModelToEntity } from "../../infrastructure/mappers/playerModelToEntity";

interface PlayerTableProps {
    players: PlayerModel[];
  }

export const PlayerTable: React.FC<PlayerTableProps>  = ({ players }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Membresia</th>
                    <th>Pelotas</th>
                </tr>
            </thead>
            <tbody>
                {players.map((p) => {
                    const player = playerModelToEntity(p);
                    return (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.isMembershipValid ? 'pagago' : 'no pagado'}</td>
                            <td>{player.isMembershipValid ? 'pagago' : 'no pagado'}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
