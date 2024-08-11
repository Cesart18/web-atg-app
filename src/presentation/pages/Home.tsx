import { NewPlayerForm } from "../components/NewPlayerForm";
import { PlayerTable } from "../components/PlayerTable"

interface Props{
  isLogged: boolean
} 

export const Home: React.FC<Props> = ({isLogged}) => {
  
  return (
    <div className="home">
      <h1>Jugadores</h1>
      {isLogged && <NewPlayerForm/>}
      <PlayerTable isLogged={isLogged} />
    </div>
  )
}
