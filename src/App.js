import React from 'react'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import theme from './styles/theme'
import Navbar from './components/navbar/navbar'
import Home from './components/templates/home'
import Login from './components/templates/login'
import Signup from './components/templates/signup'
import About from './components/templates/about'
import '@fontsource/source-code-pro/400.css'
import '@fontsource/source-sans-pro/600.css'
import Footer from './components/templates/footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App