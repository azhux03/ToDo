import React from 'react'
import Todo from './Todo';

const Lst = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map(todo => (
         <Todo 
            key={todo.id} 
            text={todo.text} 
            todo={todo}
            setTodos={setTodos}
            todos={todos}
         />
        ))}
      </ul>
    </div>
  );
};

export default Lst;