import React, { useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import theme from './styles/theme';
import Navbar from './components/navbar/navbar';
import '@fontsource/source-sans-pro';
import Footer from './components/templates/footer';
import { UserContext } from './context/userContext';
import { initialState, reducer } from './reducers/userReducer';
import Routing from './Routing';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
          <Footer />
        </Router>
      </UserContext.Provider>
    </ChakraProvider>
  );
}

export default App;
