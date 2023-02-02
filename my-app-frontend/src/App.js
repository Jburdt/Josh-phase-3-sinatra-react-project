import './App.css';
import React, { useEffect, useState } from "react";
import NavBar from './Components/NavBar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ToolList from './Components/ToolList';
import NewToolForm from './Components/NewToolForm';

const App = () => {

  const [tools, setTools] = useState([]);

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

  const addTool = (newTool) => {
    setTools([...tools, newTool])
  };

  const handleDeletedTool = (deletedTool) => {
    const filteredTools = tools.filter(tool => tool.id !== deletedTool.id)
    setTools(filteredTools)
  };

  const editLikes = (newTool) => {
    const updatedLikes = tools.map(tool => {
      if( newTool.id === tool.id) {
        return newTool
      } else {
        return tool
      }
    })
    setTools(updatedLikes)
  };

  return (
    <Router>
     <NavBar />
      <Routes> 
      <Route exact path='/' element={<Home />} />
      <Route exact path='/tools' element={<ToolList handleDeletedTool={ handleDeletedTool } tools = { tools } editLikes={editLikes} />}/>
      <Route exact path='/add-new/tools' element={<NewToolForm addTool = {addTool} tools = {tools} />} />
    </Routes>
    </Router>
  );
}

export default App;
