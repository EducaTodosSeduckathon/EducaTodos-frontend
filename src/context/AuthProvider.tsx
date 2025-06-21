import React, { useState, createContext, useEffect } from 'react';
import api from '../services/api';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from './ThemeContext';

type Props = {
  children?: React.ReactNode;
}

type IAuthContext = {
  role: string;
  setRole: (newState: string) => void;
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  accessibilityType: string;
  themeOptions: any;
  setThemeOptions: (options: any) => void;
  user: any;
  setAccessibilityType: (newState: any) => void;
  setUser: (newState: any) => void;
  login: (email: string, password: string, remember?: boolean) => void;
  logout: () => void;
}

const initialValue = {
  role: JSON.parse(localStorage.getItem('role')),
  setRole: () => {},
  authenticated: !!JSON.parse(localStorage.getItem('access_token')),
  setAuthenticated: () => {},
  user: null,
  themeOptions: null,
  setThemeOptions: () => {},
  setUser: () => {},
  login: () => {},
  logout: () => {}
}

export const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider = ({ children }: Props) => {

  const [ authenticated, setAuthenticated ] = useState(initialValue.authenticated);
  const [ user, setUser ] = useState(initialValue.user);

  const [ themeOptions, setThemeOptions ] = useLocalStorage('theme_options', '');
  const [ role, setRole ] = useLocalStorage('role', '');
  const [ accessibilityType, setAccessibilityType ] = useLocalStorage('accessibility_type', '');
  const [ token, setToken ] = useLocalStorage('access_token', '');

  useEffect(() => {
    setAuthenticated(!!token);
  }, [token]);


  useEffect(() => {
    const loadUser = async () => {
      if(token){
        try {
          const { data } = await api.get('/convitin/v1/me');
          setUser(data);
        } catch (err) {
          console.error('Failed to load user', err);
        }
      }
      
    };
    loadUser();
  }, [token]);

  const login = async (email: string, password: string, remember = false) => {
    setAuthenticated(true);
    setToken('fdsfgsdg');
    window.location.href = '/';
    return;
    const { data } = await api.post('jwt-auth/v1/token', {
      username: email,
      password
    });

    setToken(data.data.token);
    return data;
    // setUser(data.user);
  };

  const { setTheme } = useTheme();

  const logout = () => {
    setToken('');
    setUser(null);
    setThemeOptions(null);
    setTheme('light')
    window.location.href = '/'
  };

  return (
    <AuthContext.Provider value={{ role, setRole, authenticated, setAuthenticated, themeOptions, setThemeOptions, accessibilityType, setAccessibilityType, user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};