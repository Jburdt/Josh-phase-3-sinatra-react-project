import React from 'react';
import ToolCard from './ToolCard';

const ToolList = ({tools, handleDeletedTool, handleUpdate, editLikes }) => {
  return (
    <>
          <main>
            <ul className='cardsholder'>
                {tools.map((tool) => {
                  return( 
                    <ToolCard
                    editLikes={editLikes}
                    tool={tool}
                    key={tool.id}
                    handleDeletedTool={handleDeletedTool}
                    handleUpdate={handleUpdate}
                    />
                  )
                })}
            </ul>
          </main>
    </>
    )
  }

export default ToolList;