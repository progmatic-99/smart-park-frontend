import React from 'react'
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
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
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Navbar />
        </Grid>
      </Box>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
