import React from 'react';

const ToolCard = ({ tool }) => {

  const [toggle, setToggle]= useState(false);

  const handleToggle = () => {
    setToggle(!toggle)
  };

  return (
   <> 
    <div className='card-container'>  
      <div className='Card'>
        <h2 className='style-name'> Avenger: {tool.name}</h2>
          <img className="custom-style" src={tool.img_url} alt={"Avengers" }/>
            <br />
              <button className='btn' onClick={handleToggle}>{toggle ? "Hide Abilities" : "Show Abilities"}</button>
               { toggle ? <p>Abilities: {tool.abilities} </p> : null }  
            <hr />
      </div>
    </div>
   </> 
  )
}

export default ToolCard;