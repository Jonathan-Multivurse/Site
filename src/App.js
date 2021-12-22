import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './pages/Landing/Landing'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Landing />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
