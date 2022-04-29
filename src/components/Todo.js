import React from 'react'

const Todo = ({ filtered, text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const finishedHandler = () => {
        setTodos(
          todos.map(item => {
          if(item.id === todo.id) {
            return {
              ...item, 
              finished: !item.finished,
            };
          }
          return item;
        })
      );
  };
  return (  
    <div className="todo">
        <li className={`todo-item ${todo.finished ? "finished" : ""}`}>{text}</li>
      <button onClick={finishedHandler} className='finished-btn'>
        <i className='fas fa-check'>
        </i>
      </button>
      <button 
        onClick={deleteHandler} 
        className='trash-btn'>
        <i className='fas fa-trash'>
        </i>
      </button>
    </div>
  )
}

export default Todo;