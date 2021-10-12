import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export function useAuth() {
  return useContext(UserContext);
}
