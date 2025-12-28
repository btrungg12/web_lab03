import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css'; // Import CSS

function TodoApp() {
  // Khởi tạo danh sách công việc mẫu 
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Basics', completed: true },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);

  // Hàm thêm Todo mới 
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Tạo ID duy nhất bằng timestamp
      text: text,
      completed: false,
    };
    // Cập nhật state 
    setTodos([...todos, newTodo]);
  };

  // Hàm toggle trạng thái hoàn thành 
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Hàm xóa Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h1>My To-Do List</h1>
        
        {/* Truyền hàm addTodo xuống Form  */}
        <TodoForm addTodo={addTodo} />
        
        {/* Truyền todos và các hàm xử lý xuống List  */}
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default TodoApp;