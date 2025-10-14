// src/Pages/NewTask.jsx
import React, { useContext, useState } from "react";
import { TasksContext } from "../Context/TasksContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function NewTask() {
  const { createTask,getInProgress } = useContext(TasksContext);
  const [task, setTask] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = async (e) => {
    e.preventDefault();
    const newTask = await createTask(task.title, task.description);
    console.log("✅ Task created:", newTask);
    setTask({ title: "", description: "" }); // clear form
    navigate("/task_progress")

   
  };

  return (
    <div className="content-card">

      <h3 className="mb-4">New Task</h3>

      <form onSubmit={addTask}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleTask}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            placeholder="Enter task description"
            rows="3"
            value={task.description}
            onChange={handleTask}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
