import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

function TodoList() {
  // Estado para almacenar la lista de tareas y el ítem en edición
  const [todos, setTodos] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  // Manejador para eliminar una tarea
  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Manejador para editar una tarea
  const handleEdit = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    setEditingItemId(null); // Finaliza la edición
  };

  // Manejador para iniciar la edición de una tarea
  const handleStartEdit = id => {
    setEditingItemId(id);
  };

  // Manejador para cancelar la edición
  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  // Manejador para agregar una nueva tarea
  const handleAdd = newTodo => {
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodoItem = { id: newId, text: newTodo };
    setTodos(prevTodos => [...prevTodos, newTodoItem]);
  };

  return (
    <div>
      {/* Componente para agregar nuevas tareas */}
      <AddTodo handleAdd={handleAdd} />

      {/* Lista de tareas */}
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            isEditing={editingItemId === todo.id}
            handleStartEdit={() => handleStartEdit(todo.id)}
            handleCancelEdit={handleCancelEdit}
          />
        ))}
      </ul>
        {/* Footer */}
        <footer>
        <p>Yesid Alejandro Rodriguez Vidales</p>
        <p>Nicolas Camayo Yunda</p>
        <p>Ficha: 2547405</p>
      </footer>
    </div>
  );
}

export default TodoList;
