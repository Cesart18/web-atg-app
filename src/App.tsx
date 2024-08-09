import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './presentation/components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './config/router/appRouter';



const App = () => {
  return (
    <AuthProvider>      
    <Router>
      <Navbar/>
      <main>
      <AppRouter/>
      </main>
    </Router>
    </AuthProvider>
  );
};

export default App;
