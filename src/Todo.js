import React from 'react'

const Todo = ({todo, toggleTodo}) => {
  const hadleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
        <label>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              readOnly 
              onChange={hadleTodoClick}
            />
        </label>
        {todo.name}
    </div>
  )
}

export default Todo