import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
export default function App({ Component, pageProps }) {
  return <ChakraProvider>
            <Navbar/>
            <Component {...pageProps} />
        </ChakraProvider>
}