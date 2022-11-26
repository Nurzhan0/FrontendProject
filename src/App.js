// import React, { useTransition } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import WebcamApp  from './components/WebcamApp';
import WebcamImage from './components/WebcamImage';

import { useState } from 'react';
import { createContext } from 'react';
import UploadImage from './components/UploadImage';
import AdminPanel from './components/AdminPanel';


export const ThemeContext = createContext()

function App() {
  const[theme, setTheme] = useState("light") 

  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
};
  return (
    <>
    <Router>
      <ThemeContext.Provider value={{theme,toggleTheme,setTheme}}>
        <Navbar/>
        <Switch>
          <Route path="/" component = {Home} exact><Home/></Route>
          <Route path="/about" component = {About} exact><About/></Route>
          <Route path="/contact" component = {Contact} exact><Contact/></Route>
          <Route path="/webcam" component = {WebcamImage} exact><WebcamImage/></Route>
          <Route path="/form" component = {UploadImage} exact><UploadImage/></Route>
          <Route path="/admin" component = {AdminPanel} exact><AdminPanel/></Route>
        </Switch>
        </ThemeContext.Provider>
      </Router>
    </>
    
  );
}

export default App;
