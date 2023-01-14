import React from 'react'

const ToolCard = ({name, imageUrl, body}) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ZsPU73i6oqLVxMUKwujuue5gdjk9Fg4ktA&usqp=CAU"/>
      </div>
        <div className='card-content'>
        </div>
        <div className='card-title'>
          <h3>blah</h3>
        <div>
          <p>{body}</p>
        </div>
      </div>
      <div className='btn'>
        <button>
          <a>
            blah
          </a>
        </button>
      </div>
    </div>
  )
}

export default ToolCard;