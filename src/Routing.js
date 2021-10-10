import React, { useContext, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './components/templates/home';
import Login from './components/templates/login';
import Signup from './components/templates/signup';
import About from './components/templates/about';
import Profile from './components/user/profile';
import { UserContext } from './context/userContext';

const Routing = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ payload: user });
      history.push('/user');
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/user" component={Profile} />
    </Switch>
  );
};

export default Routing;
