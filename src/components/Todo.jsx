import React from "react";
import { FaTrash, FaPenToSquare } from "react-icons/fa6";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`inCompleted ${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FaPenToSquare
          className="icon edit-icon"
          onClick={() => !task.completed && editTodo(task.id)}
        />
        <FaTrash className="delete-icon" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
