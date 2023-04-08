/*import React, { useReducer } from 'react'
import { todoReducer } from '../reducers/todo';
import '../styles/App.css';
import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
const App = () => {
  const [state,dispatch] = useReducer(todoReducer,{})
  
 
  return (
    <div id="main">
      <AddTodo />
     {}
    </div>
  )
}*/

import React, { useReducer } from "react";
import { todoReducer } from "../reducers/todo";
import "../styles/App.css";
import { AddTodo } from "./AddTodo";
import { Todo } from "./Todo";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <div id="main">
      <AddTodo dispatch={dispatch} />
      {state.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default App;



