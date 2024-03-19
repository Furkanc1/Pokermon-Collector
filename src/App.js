import './App.css';
import Main from './components/Main';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landingPage';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Landing />} />

        <Route path='/pokemonIndex' element={<Main/>} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
