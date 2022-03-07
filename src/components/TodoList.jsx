import React from 'react';
import TodoItem from './TodoItem';


function TodoList(props) {
  return (
    <ul>
        {props.todos.map((todo, index) => {
            return <TodoItem index = {index} todo = {todo} 
            key={todo.id} onChange = {props.onToggle} />
        })}
    </ul>
  )
}

export default TodoList;