import './App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar> </Navbar> 
      <Home></Home>
      <Footer> </Footer>
    </ChakraProvider>
  );
}

export default App;
