import React from 'react';
import { useAuth } from '../../context/userContext';

const UserHome = () => {
  const { state } = useAuth();

  return <div>Logged In.</div>;
};

export default UserHome;
