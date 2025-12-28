import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox để đánh dấu hoàn thành [cite: 809] */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      
      {/* Nội dung công việc */}
      <span className="todo-text">{todo.text}</span>

      {/* Nút xóa [cite: 809] */}
      <button 
        className="delete-btn" 
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;