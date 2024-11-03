import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <h1>
      Se completaron {completedTodos} de {totalTodos} Todos
    </h1>
  );
};

export {TodoCounter};