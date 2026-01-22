import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'patient' | 'doctor' | 'admin';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string, role: UserRole) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user based on role
    const mockUsers: Record<UserRole, User> = {
      patient: {
        id: 'p1',
        name: 'John Smith',
        email: email,
        role: 'patient',
        avatar: '/placeholder.svg',
      },
      doctor: {
        id: 'd1',
        name: 'Dr. Sarah Johnson',
        email: email,
        role: 'doctor',
        avatar: '/placeholder.svg',
      },
      admin: {
        id: 'a1',
        name: 'Admin User',
        email: email,
        role: 'admin',
        avatar: '/placeholder.svg',
      },
    };

    setUser(mockUsers[role]);
  };

  const signup = async (name: string, email: string, password: string, role: UserRole) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser({
      id: `user_${Date.now()}`,
      name,
      email,
      role,
      avatar: '/placeholder.svg',
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
