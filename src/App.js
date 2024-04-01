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
import Profile from './loggedInPages/profile';
import Settings from './loggedInPages/settings';
import Inventory from './loggedInPages/inventory';
import Teams from './loggedInPages/teams';
// import themeSelect from './components/Utils/themeSelect';
export const State = createContext({});
export const ThemeContext = createContext(null)

export const authTypes = {
  signUp: `Sign Up`,
  signIn: `Sign In`,
}

function App() {

  const [user, setUser] = useState(undefined);
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ))
  }

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
    <ThemeContext.Provider value={{ theme , toggleTheme }}>
    <div className='app' id={theme}>
    <State.Provider value={{ user, setUser }}>
      <Navbar />

      <Routes>
        
        <Route path='/' element={<Landing />} />

        <Route path='/pokemonIndex' element={<Main/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={user === undefined ? <Login/> : <Navigate to={`/`} />} />
        <Route path='/signup' element={user === undefined ? <Signup/> : <Navigate to={`/`} />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/teams' element={<Teams/>} />

      </Routes>
      
      <Footer />
    </State.Provider>
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
