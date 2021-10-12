import { createContext, useContext } from 'react';

const UserContext = createContext(null);

export function useAuth() {
  return useContext(UserContext);
}
