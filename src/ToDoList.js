import React from 'react'

function ToDoList({listItem}) {
  return (
    <div>
        {listItem.map((item, index) => 
            <p key={index}>{item}</p>
        )}
    </div>
  )
}

export default ToDoList;