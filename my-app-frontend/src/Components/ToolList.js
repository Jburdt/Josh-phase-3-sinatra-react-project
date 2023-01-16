import React from 'react';
import ToolCard from './ToolCard';

const ToolList = ({ tools }) => {
  return (
    <>
          <main>
            <ul className='cardsholder'>
                {tools.map((tool) => {
                  return( 
                    <ToolCard
                    tool={tool}
                    key={tool.id}
                    />
                  )
                })}
            </ul>
          </main>
    </>
    )
  }

export default ToolList;