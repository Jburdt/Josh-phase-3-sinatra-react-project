const ToolCard = ({ tool, handleDeletedTool, editLikes }) => {

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

  const handleLikeUpdate = () => {
    fetch(`http://localhost:9292/tools/${tool.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: tool.likes + 1
      }),
    })
    .then((res) => res.json())
    .then(data => {
      editLikes(data)
    })
  };

  return (
    <div className='card'>
        <h2 className='tool-name'> Tool Name: {tool.name}</h2>
          <img className="tool-image" src={tool.img_url} alt={"tools"}/>
          <p className='description'>{tool.description}</p>
          <p className='condition'>{tool.condition}</p>
          <p className='price'>${tool.price}</p>
          <p className="likes"> Likes: {tool.likes}</p>
          <button onMouseEnter={message} onClick={(handleDelete)} type='submit' className='delete'>Rent Me!</button>
          <button onClick={(handleLikeUpdate)} type='submit' className='like-btn'>Like Tool</button>
      </div>
  )
};

export default ToolCard;