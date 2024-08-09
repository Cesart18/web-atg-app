import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../config/hooks/useAuth';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError(err as string);
      alert(error)
    }
  };


  return (
    <section>
      <div className='login-form'>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin} className='btn-primary'>Login</button>
    </div>
    </section>
  );
};
