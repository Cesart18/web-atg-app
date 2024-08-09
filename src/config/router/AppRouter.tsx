import { Route, Routes } from 'react-router-dom';
import { Doubles } from "../../presentation/pages/Doubles"
import { Home } from "../../presentation/pages/Home"
import { Singles } from "../../presentation/pages/Singles"
import { Login } from "../../presentation/pages/Login"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doubles" element={<Doubles />} />
        <Route path="/singles" element={<Singles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}
