import React, { useMemo, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './styles/theme';
import Navbar from './components/navbar/navbar';
import Home from './components/templates/home';
import Login from './components/templates/login';
import Signup from './components/templates/signup';
import About from './components/templates/about';
import '@fontsource/source-sans-pro';
import Footer from './components/templates/footer';
import { UserContext } from './context/userContext';
import Profile from './components/user/profile';

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={value}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={Profile} />
          </Switch>
          <Footer />
        </Router>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
