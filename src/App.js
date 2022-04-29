import './App.css';
import Form from './components/Form'
import Lst from './components/Lst'
import React, { useEffect, useState } from 'react';

function App() {

  const[inputText, setInputText] = useState('');
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);
  
  useEffect(() => {
    filterHandler()
  }, [todos, status]);

  const filterHandler = () =>{
    switch(status){
      case 'finished':
        setFiltered(todos.filter((todo) => todo.finished == true));
        console.log(filtered)
        break;
      case 'unfinished':
        setFiltered(todos.filter((todo) => todo.finished == false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>
          ToDo List
        </h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText}
        setStatus={setStatus}
        status={status}
      />
      <Lst 
        todos={todos} 
        setTodos={setTodos} 
        filtered={filtered}
      />
    </div>
  );
}
export default App;
