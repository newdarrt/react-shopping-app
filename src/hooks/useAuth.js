import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);

  const login = (email, password) => {
    // Mock login function
    setUser({ email });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
