import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import UserHome from './userHome';

const Profile = () => {
  const { state } = useContext(UserContext);

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
