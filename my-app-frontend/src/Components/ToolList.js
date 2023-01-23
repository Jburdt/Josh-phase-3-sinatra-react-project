import React from 'react';
import ToolCard from './ToolCard';

const ToolList = ({ tools, handleDeletedTool }) => {
  return (
    <>
          <main>
            <ul className='cardsholder'>
                {tools.map((tool) => {
                  return( 
                    <ToolCard
                    tool={tool}
                    key={tool.id}
                    handleDeletedTool={handleDeletedTool}
                    />
                  )
                })}
            </ul>
          </main>
    </>
    )
  }

export default ToolList;