# Lab 3: Introduction to React - Capstone Project (Simple To-Do List)

This repository contains the source code for **Part VI: Capstone Project** of Lab 3. It is a fully functional To-Do List application built with React, demonstrating core concepts like component composition, state management, and event handling.

## 👤 Student Information

* **Full Name:** Bùi Minh Bảo Trung
* **Student ID:** 23521671

## 🚀 Live Demo

You can access the deployed application here:
👉 **[https://web-lab03.vercel.app/](https://web-lab03.vercel.app/)**

## 📝 Project Features

[cite_start]This application satisfies all requirements outlined in the Lab 3 documentation [cite: 771-775]:

1.  **Add Todos:** Users can enter a task in the input field and add it to the list. [cite_start]The input is a controlled component [cite: 796-797].
2.  **Input Validation:** The form prevents adding empty or whitespace-only tasks.
3.  **Toggle Completion:** Users can click a checkbox to mark a task as completed. [cite_start]Completed tasks are visually distinguished with a strikethrough style[cite: 811].
4.  [cite_start]**Delete Todos:** Each task has a "Delete" button to remove it from the list [cite: 809-810].
5.  [cite_start]**Component Architecture:** The app is structured into four distinct components for better maintainability [cite: 776-780]:
    * [cite_start]`TodoApp`: Main container managing the state (`todos` array) and logic[cite: 791, 798].
    * [cite_start]`TodoForm`: Handles user input and submission[cite: 790].
    * [cite_start]`TodoList`: Renders the list of items[cite: 787].
    * [cite_start]`TodoItem`: Renders individual tasks[cite: 786].

## 🛠️ Technologies Used

* **React (Vite):** Frontend framework.
* **CSS:** Custom styling for a modern and clean user interface.
* **Vercel:** Deployment platform.

## 💻 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/btrungg12/web_lab03.git](https://github.com/btrungg12/web_lab03.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd web_lab03
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```

---
*Completed by Bùi Minh Bảo Trung - 23521671*
