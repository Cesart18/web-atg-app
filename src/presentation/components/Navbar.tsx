import '../components/components.css';
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../config/hooks/useAuth';
// import { useAuth } from '../../context/AuthContext';



export const Navbar = () => {
  const { isLogged, logout } = useAuth();
  const navigate = useNavigate();
  const logoutHandle = async () => {
       logout();
      navigate('/')
  }

  return (
    <nav>
      <div></div>
        <div className="nav-links">
        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')} >Inicio</NavLink>
            <NavLink to="/doubles" className={({isActive}) => (isActive ? 'active' : '')}>Dobles</NavLink>
            <NavLink to="/singles" className={({isActive}) => (isActive ? 'active' : '')}>Singles</NavLink>
        </div>
      {
        isLogged ?
          <button className='icon-btn icon-logout'><FontAwesomeIcon onClick={logoutHandle}   icon={faRightFromBracket} /></button>
          : <button className='icon-btn'><FontAwesomeIcon onClick={() => navigate('/login')} icon={faRightToBracket} /></button>
      }
    </nav>
  )
}
