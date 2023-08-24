import React, { useState } from 'react';

function AddTodo({ handleAdd }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      handleAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Agregar nueva tarea..."
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-button">Agregar</button>
    </form>
  );
}

export default AddTodo;
