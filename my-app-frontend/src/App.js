import './App.css';
import React from "react";
import NavBar from './Components/NavBar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';


const App = () => {
  return (
    <Router>
     <NavBar />
      <Routes> 
      <Route exact path='/' element={<Home />}/>
    </Routes>
    </Router>
  );
}

export default App;
