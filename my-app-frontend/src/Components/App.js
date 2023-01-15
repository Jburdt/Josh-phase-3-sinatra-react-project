import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './NavBar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import ToolList from './ToolList';
import ContractorsList from './ContractorsList';



const App = () => {

  const [tools, setTools] = useState

  useEffect(() => {
    fetch("http://localhost:9292/tools")
    .then(r => r.json())
    .then(data => setTools(data))
    .catch(error => console.log(error))
  }, []);

  if(!tools) {
    return( <h2> Loading tools...</h2> 
    )
  }

  return (
    <Router>
     <NavBar />
      <Routes> 
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/ToolList' element={<ToolList tools = {tools} />}/>
      <Route exact path='/contractorList' element={<ContractorsList  />}/>
    </Routes>
    </Router>
  );
}

export default App;
