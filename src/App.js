import './App.css';
import Form from './components/Form'
import Lst from './components/Lst'
import React, { useEffect, useState } from 'react';

function App() {
  const[inputText, setInputText] = useState('');
  const [todos, setTodos] = useState ([]);
  return (
    <div className="App">
      <header>
        <h1>
          ToDo List
        </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <Lst />
    </div>
  );
}

export default App;
