import React from 'react';

const ToolCard = ({ tool, deletedTool }) => {

  function handleDelete() {
    fetch(`http://localhost:9292/tools/${tool.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then((deletedTool) => onDeletedTool(deletedTool));
  }


  return (
   <> 
    <div className='card-container'>  
      <div className='Card'>
        <h2 className='tool-name'> Tool Name: {tool.name}</h2>
          <img className="tool-image" src={tool.img_url} alt={"tools"}/>
          <p className='description'>{tool.description}</p>
          <p className='condition'>{tool.condition}</p>
          <p className='price'>${tool.price}</p>
          <button onClick={handleDelete} type='submit' className='rent-btn'>Rent Me!</button>
          <br></br>
      </div>
    </div>
   </> 
  )
}

export default ToolCard;