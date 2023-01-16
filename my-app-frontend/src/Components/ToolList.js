import React from 'react';
import ToolCard from './ToolCard';

const ToolList = ({ tools, deletedTool }) => {
  return (
    <>
          <main>
            <ul className='cardsholder'>
                {tools.map((tool) => {
                  return( 
                    <ToolCard
                    tool={tool}
                    key={tool.id}
                    deletedTool={deletedTool}
                    />
                  )
                })}
            </ul>
          </main>
    </>
    )
  }

export default ToolList;