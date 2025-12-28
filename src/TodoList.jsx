import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  // Hiển thị thông báo nếu chưa có việc nào (UX tốt hơn)
  if (todos.length === 0) {
    return <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {/* Dùng map để render danh sách [cite: 788] */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Key là bắt buộc
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;