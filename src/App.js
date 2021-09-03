import React from 'react'
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/templates/home'
import Login from './components/templates/login'
import About from './components/templates/about'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App