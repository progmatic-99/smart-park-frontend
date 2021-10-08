import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const UserHome = () => {
  const { user, setUser } = useContext(UserContext);
  return <div>User</div>;
};

export default UserHome;
