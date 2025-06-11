
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { sampleUsers } from '../data/sampleData';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    console.log('Login attempt for:', email);
    // Simple authentication - in real app, this would be handled by Django backend
    const foundUser = sampleUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      console.log('Login successful:', foundUser);
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true;
    }
    console.log('Login failed');
    return false;
  };

  const logout = () => {
    console.log('Logout called');
    setUser(null);
    localStorage.removeItem('currentUser');
    // Force a page refresh to ensure clean state
    window.location.href = '/';
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        console.log('Restored user from localStorage:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('currentUser');
      }
    }
  }, []);

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
