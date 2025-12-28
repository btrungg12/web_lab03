// src/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  // State quản lý input value
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trang reload
    
    // Kiểm tra dữ liệu rỗng (Best practice)
    if (!text.trim()) return;

    // Gọi hàm addTodo được truyền từ props
    addTodo(text);
    
    // Reset input về rỗng
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        // Controlled component: cập nhật state khi gõ
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;