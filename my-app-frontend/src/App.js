import './App.css';
import React from "react";
import NavBar from './Components/NavBar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ToolList from './Components/ToolList';



const App = () => {

  
  return (
    <Router>
     <NavBar />
      <Routes> 
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/ToolList' element={<ToolList  />}/>
    </Routes>
    </Router>
  );
}

export default App;
