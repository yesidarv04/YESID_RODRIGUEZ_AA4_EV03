import React, { useState } from 'react';

function TodoItem({ todo, handleDelete, handleEdit, isEditing, handleStartEdit, handleCancelEdit }) {
  // Estado local para el texto editado
  const [editedText, setEditedText] = useState(todo.text);

  // Manejador para guardar la edición o iniciarla
  const handleEditClick = () => {
    if (isEditing) {
      handleEdit(todo.id, editedText); // Guarda la edición
    } else {
      handleStartEdit(todo.id); // Inicia la edición
      setEditedText(todo.text); // Almacena el texto actual
    }
  };

  return (
    <li className="todo-item">
      {/* Mostrar controles de edición si se está editando */}
      {isEditing ? (
        <div className="edit-controls">
          <input
            type="text"
            value={editedText}
            onChange={event => setEditedText(event.target.value)}
          />
          <div className="buttons">
            <button className="save-button" onClick={handleEditClick}>
              {isEditing ? 'Guardar' : 'Editar'}
            </button>
          </div>
        </div>
      ) : (
        // Mostrar controles de visualización si no se está editando
        <div className="view-controls">
          <span>{todo.text}</span>
          <div className="buttons">
            {/* Mostrar botón de edición solo si no se está editando */}
            {!isEditing && (
              <button className="edit-button" onClick={handleEditClick}>Editar</button>
            )}
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>Eliminar</button>
          </div>
        </div>
      )}
    </li>
  );
}

export default TodoItem;
