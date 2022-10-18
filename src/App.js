import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import WebcamApp  from './components/WebcamApp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" component = {Home} exact><Home/></Route>
          <Route path="/about" component = {About} exact><About/></Route>
          <Route path="/contact" component = {Contact} exact><Contact/></Route>
          <Route path="/webcam" component = {WebcamApp} exact><WebcamApp/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
