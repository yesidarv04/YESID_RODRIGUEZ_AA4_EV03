import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList'; // Importa el componente TodoList

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hacer las compras' },
    { id: 2, text: 'Estudiar para el examen' },
    { id: 3, text: 'Ir al gimnasio' }
  ]);

  const handleDelete = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tareas</h1>
        <TodoList todos={todos} handleDelete={handleDelete} /> {/* Renderiza el componente TodoList */}
      </header>
    </div>
  );
}

export default App;
