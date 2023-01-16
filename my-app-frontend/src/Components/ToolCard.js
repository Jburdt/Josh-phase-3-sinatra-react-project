import React from 'react';

const ToolCard = ({ tool }) => {


  return (
   <> 
    <div className='card-container'>  
      <div className='Card'>
        <h2 className='tool-name'> Tool Name: {tool.name}</h2>
          <img className="tool-image" src={tool.img_url} alt={"tools"}/>
          <p className='description'>{tool.description}</p>
          <p className='condition'>{tool.condition}</p>
          <br />
      </div>
    </div>
   </> 
  )
}

export default ToolCard;