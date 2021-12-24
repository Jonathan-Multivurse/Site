import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './pages/Landing/Landing'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState, useEffect} from 'react'
import BounceLoader from "react-spinners/BounceLoader";

const theme = createTheme({
  palette: {
    primary: {
      main: '#222'
    }
  }
})
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <>
    {
    loading ? 
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
    <BounceLoader size={75} css={{marginTop: 200}}/>
    </div>
     :
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    </ThemeProvider>
}</>
  );
}

export default App;
