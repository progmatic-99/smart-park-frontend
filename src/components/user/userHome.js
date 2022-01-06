import React from 'react';
import { useAuth } from '../../context/userContext';
import Map from './map'

const UserHome = () => {
  const { state } = useAuth();

  return (
    <Map />
  )
};

export default UserHome;
