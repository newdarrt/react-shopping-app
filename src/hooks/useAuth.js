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

  const signup = (name, email, password) => {
    // Mock signup function
    const newUser = { name, email };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  return {
    user,
    isAuthenticated,
    login,
    logout,
    signup,
  };
};

export default useAuth;
