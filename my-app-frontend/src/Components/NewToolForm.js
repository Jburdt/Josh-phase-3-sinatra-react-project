import React, { useState } from 'react';

const NewToolForm = ({ addTool }) => {

  const [toolData, setToolData] =useState({
    id: 0,
    name: "",
    img_url: "",
    condition: "",
    description: ""
  })

  function handleChange(event) {
    setToolData({
      ...toolData,
      [event.target.id]: event.target.value,
    });
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://http://localhost:9292/tools", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toolData)
    })
    .then(r => r.json())
    .then(addTool)
  }
  
  return (
  <div>
      <p>Enter the followin information to add another tool.</p>
    <form onSubmit={handleSubmit} className="new-tool" noValidate autoComplete="off">
      <label htmlFor='name'/>
      <input id='name' onChange={handleChange} type='text' value={toolData.name} placeholder="Tool Name..."  />
      <input id='img_url' onChange={handleChange} type='text' value={toolData.img_url} placeholder="Tool Image Link..."  />
      <input id='description' onChange={handleChange} type='text' value={toolData.description} placeholder="Tool description..."  />
      <input id='condition' onChange={handleChange} type='text' value={toolData.condition} placeholder="Tool condition..."  />
        <button
        type="submit"
        variant="contained"
        color="default"
        className="upload"
        >
        Upload
        </button>
    </form>
  </div>
  )
}

export default NewToolForm;