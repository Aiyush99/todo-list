import React, { useState } from 'react';
import { Checkmark } from 'react-checkmark'

const Todo = ({ todos, completeTodo,hashTodo }) => {
    // const hashTodo = ()=>{
  //   if(todos.includes("#")){
  //   setTodos(todos.filter(todo=>todo.isComplete))
  //   }
  // }

  

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : todo.isHashed ? "todo-row hashed": 'todo-row'}
      key={index}
    >
  
      <div onClick={()=>hashTodo(todo.id)} key={todo.id}>
        {todo.text}
      </div>

    <button onClick={()=>completeTodo(todo.id)} className="button-style">Complete</button>
    
    </div>
  ));
};

export default Todo;
