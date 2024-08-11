import { Route, Routes } from 'react-router-dom';
import { Doubles } from "../../presentation/pages/Doubles"
import { Home } from "../../presentation/pages/Home"
import { Singles } from "../../presentation/pages/Singles"
import { Login } from "../../presentation/pages/Login"
import { usePlayer } from '../hooks/userPlayer';
import { PlayerDetailsPage } from '../../presentation/pages/PlayerDetailsPage';
import { useAuth } from '../hooks/useAuth';

export const AppRouter = () => {
  const { players } = usePlayer();
  const { isLogged } = useAuth();
  return (
    <Routes>
        <Route path="/" element={<Home isLogged={isLogged} />} />
        <Route path="/doubles" element={<Doubles players={players} isLogged={isLogged} />} />
        <Route path="/singles" element={<Singles players={players} isLogged={isLogged} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/players/:id" element={<PlayerDetailsPage playersModel={players} />} />
      </Routes>
  )
}
