import { createContext, useContext, useState } from 'react';

type User = { name: string } | null;

type AuthContextType = {
  user: User;
  logout: () => void;
  login: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ name: 'Demo User' });
  return (
    <AuthContext.Provider value={{ user, logout: () => setUser(null), login: () => setUser({ name: 'Demo User' }) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
      return { user: null, logout: () => {}, login: () => {} };
  }
  return context;
};
