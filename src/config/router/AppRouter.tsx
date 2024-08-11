import { Route, Routes } from 'react-router-dom';
import { Doubles } from "../../presentation/pages/Doubles"
import { Home } from "../../presentation/pages/Home"
import { Singles } from "../../presentation/pages/Singles"
import { Login } from "../../presentation/pages/Login"
import { usePlayer } from '../hooks/userPlayer';
import { PlayerDetailsPage } from '../../presentation/pages/PlayerDetailsPage';

export const AppRouter = () => {
  const { players } = usePlayer();
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doubles" element={<Doubles players={players} />} />
        <Route path="/singles" element={<Singles players={players} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/players/:id" element={<PlayerDetailsPage />} />
      </Routes>
  )
}
