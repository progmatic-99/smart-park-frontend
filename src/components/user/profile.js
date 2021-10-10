import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import UserHome from './userHome';

const Profile = () => {
  const { user } = useContext(UserContext);
  console.dir(user);

  return (
    <Route
      render={({ location }) =>
        user ? (
          <UserHome />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Profile;
