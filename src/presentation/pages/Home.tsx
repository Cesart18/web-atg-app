import { useAuth } from "../../config/hooks/useAuth";
import { NewPlayerForm } from "../components/NewPlayerForm";
import { PlayerTable } from "../components/PlayerTable"

// interface Props {
//   players: PlayerModel[];
// }

export const Home = () => {
  const { isLogged } = useAuth();
  return (
    <div className="home">
      <h1>Jugadores</h1>
      {isLogged && <NewPlayerForm/>}
      <PlayerTable isLogged={isLogged}/>
    </div>
  )
}
