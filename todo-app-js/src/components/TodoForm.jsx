import React, { useState } from 'react';

const TodoForm = () => {
  const [state, setState] = useState({
    items: [],
    text: ''
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={state.text}
        onChange={e => setState({ ...state, text: e.target.value })}
        placeholder="Please write something here!"
      />
      <button>Add Item</button>
    </form>
  );
};

export default TodoForm;
