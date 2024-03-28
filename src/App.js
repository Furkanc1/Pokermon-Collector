import './App.css';
import Main from './components/Main';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { createContext, useEffect, useState } from 'react';
import Landing from './components/landingPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Signup from './components/signup';
import Login from './components/login';
import SearchPage from './components/searchPage';

export const State = createContext({});

export const authTypes = {
  signUp: `Sign Up`,
  signIn: `Sign In`,
}

function App() {

  let [user, setUser] = useState(undefined);

  useEffect(() => {
    if (user === undefined) {
      let storedUser = JSON.parse(localStorage.getItem(`user`));
      if (storedUser) {
        // console.log(`Stored User`, storedUser);
        setUser(storedUser);
      }
    }
  }, [user])

  return (
    <State.Provider value={{ user, setUser }}>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Landing />} />

        <Route path='/pokemonIndex' element={<Main/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={user === undefined ? <Login/> : <Navigate to={`/`} />} />
        <Route path='/signup' element={user === undefined ? <Signup/> : <Navigate to={`/`} />} />

      </Routes>
      
      <Footer />
    </State.Provider>
  );
}

export default App;
