import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './presentation/components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './config/router/AppRouter';
import './index.css';
import { PlayerProvider } from './context/PlayerContext';



const App = () => {
  return (
    <AuthProvider>
      <PlayerProvider>
    <Router>
      <Navbar/>
      <main>
      <AppRouter/>
      </main>
    </Router>
        </PlayerProvider>      
    </AuthProvider>
  );
};

export default App;
