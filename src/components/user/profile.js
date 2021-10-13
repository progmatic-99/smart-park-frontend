import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/userContext';
import UserHome from './userHome';

const Profile = () => {
  const { state } = useAuth();

  return (
    <Route
      render={({ location }) =>
        state.user ? (
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
