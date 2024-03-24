import './App.css';
import Main from './components/Main';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Landing from './components/landingPage';
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
