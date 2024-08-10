import { Route, Routes } from 'react-router-dom';
import { Doubles } from "../../presentation/pages/Doubles"
import { Home } from "../../presentation/pages/Home"
import { Singles } from "../../presentation/pages/Singles"
import { Login } from "../../presentation/pages/Login"
import { usePlayer } from '../hooks/userPlayer';

export const AppRouter = () => {
  const { players } = usePlayer();
  return (
    <Routes>
        <Route path="/" element={<Home players={players}/>} />
        <Route path="/doubles" element={<Doubles players={players} />} />
        <Route path="/singles" element={<Singles players={players} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}
