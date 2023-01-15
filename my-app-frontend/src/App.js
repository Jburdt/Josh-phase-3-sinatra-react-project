import './App.css';
import React from "react";
import NavBar from './Components/NavBar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ToolList from './Components/ToolList';
import ContractorsList from './Components/ContractorsList';



const App = () => {

  return (
    <Router>
     <NavBar />
      <Routes> 
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/ToolList' element={<ToolList  />}/>
      <Route exact path='/contractorList' element={<ContractorsList  />}/>
    </Routes>
    </Router>
  );
}

export default App;
