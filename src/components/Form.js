import React from 'react';

const Form = ({ status, setStatus, inputText, setInputText, todos, setTodos }) => {
    const inputHandler = (text) => {
        setInputText(text.target.value);
        console.log(inputText)
    };
    const submitHandler = (t) => {
        t.preventDefault();
        setTodos([
            ...todos, {text: inputText, finished: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    const statusHandler = (t) => {
        setStatus(status = t.target.value)
    }
    return(
        <form>
            <input 
            value = {inputText} 
            onChange={inputHandler} 
            type="text" className="todo-input"/>
            <button 
            onClick={submitHandler} 
            className="todo-button">
                <i className="far fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">View All</option>
                <option value="started">Started</option>
                <option value="finished">Finished</option>
                </select>
            </div>
        </form>
    );
}

export default Form;