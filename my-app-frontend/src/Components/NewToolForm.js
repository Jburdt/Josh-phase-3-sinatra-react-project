import React, { useState } from 'react';

const NewToolForm = ({ addTool }) => {

  const [name, SetName] = useState('');
  const [img_url, SetImg_url] = useState('');
  const [description, SetDescription] = useState('');
  const [price, SetPrice] = useState('');
  const [condition, SetCondition] = useState('');

  const [toolData, setToolData] =useState({
    id: 0,
    name: "",
    img_url: "",
    condition: "",
    description: ""
  })

  const handleNameChange = (e) => {
    SetName(e.target.value)
  };

  const handleImgChange = (e) => {
    SetImg_url(e.target.value)
  };

  const handleDescriptionChange = (e) => {
    SetDescription(e.target.value)
  };

  const handlePriceChange = (e) => {
    SetPrice(e.target.value)
  };

  const handleConditionChange = (e) => {
    SetCondition(e.target.value)
  };

  // function handleChange(event) {
  //   setToolData({
  //     ...toolData,
  //     [event.target.id]: event.target.value,
  //   });
  // } 
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetch("http://http://localhost:9292/tools", {
  //     method: 'POST',
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(toolData)
  //   })
  //   .then(r => r.json())
  //   .then(addTool)
  // }
  
  return (
  <div>
      <p>Enter the followin information to add another tool.</p>
    <form className="new-tool" noValidate autoComplete="off">
      <label htmlFor='name'/>
      <input id='name' onChange={handleNameChange} type='text' value={name} placeholder="Tool Name..."  />
      <input id='img_url' onChange={handleImgChange} type='text' value={img_url} placeholder="Tool Image Link..."  />
      <input id='description' onChange={handleDescriptionChange} type='text' value={description} placeholder="Tool description..."  />
      <input id='price' onChange={handlePriceChange} type='text' value={price} placeholder="Tool price..."  />
      <input id='condition' onChange={handleConditionChange} type='text' value={condition} placeholder="Tool condition..."  />
        <button type="submit" variant="contained" color="default" className="upload">Upload New Tool</button>
    </form>
  </div>
  )
}

export default NewToolForm;