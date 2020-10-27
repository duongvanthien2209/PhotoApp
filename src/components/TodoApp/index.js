import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoSlice';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button type="button" onClick={() => dispatch(addTodo(text))}>ADD</button>
      {todos.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default TodoApp;
