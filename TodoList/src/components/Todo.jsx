import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function AddTodo() {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]); // Fixed, spread the todos array
      setInputValue('');  
    }
  }

  function DeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  
    
       return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <br />
      <button onClick={AddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            {todo}
            <button onClick={() => DeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
