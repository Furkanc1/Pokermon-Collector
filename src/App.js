import './App.css';
import Main from './components/Main';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Landing from './components/landingPage';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Signup from './components/signup';
import Login from './components/login';
// import searchPage from './components/searchPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Landing />} />

        <Route path='/pokemonIndex' element={<Main/>} />
        <Route path='/search' element={<searchPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
