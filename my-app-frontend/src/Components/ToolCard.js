import React from 'react';

const ToolCard = ({ tool, handleDeletedTool }) => {

  const handleDelete = () => {
    fetch(`http://localhost:9292/tools/${tool.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeletedTool(tool));
  };

  const message = (e) => {
    alert('This will delete the tool!')
  }; 

  return (
      <div className='card'>
        <h2 className='tool-name'> Tool Name: {tool.name}</h2>
          <img className="tool-image" src={tool.img_url} alt={"tools"}/>
          <p className='description'>{tool.description}</p>
          <p className='condition'>{tool.condition}</p>
          <p className='price'>${tool.price}</p>
          {/* <p className='category'>{tool.category}</p> */}
          <button onMouseEnter={message} onClick={(handleDelete)} type='submit' className='delete'>Rent Me!</button>
          <button onClick={(null)} type='submit' className='edit-btn'>Edit Tool</button>
      </div>
  )
}

export default ToolCard;