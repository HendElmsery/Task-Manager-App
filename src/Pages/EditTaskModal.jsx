import React, { useState } from "react";

export default function EditTaskModal({ show, onClose, onSave, task }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  if (!show) return null;

  return (
    <div className="modal-backdrop fade show d-flex align-items-center justify-content-center">
      <div className="modal-card card shadow-lg p-4 rounded-4 animate-fade-in" style={{ width: "400px", background: "rgba(255,255,255,0.95)" }}>
        <h4 className="mb-3 text-center text-primary">Edit Task</h4>

        <input
          type="text"
          className="form-control mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
        />
        <textarea
          className="form-control mb-4"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
        ></textarea>

        <div className="d-flex justify-content-end gap-2">
          <button className="btn btn-outline-secondary rounded-pill px-3" onClick={onClose}>
            Cancel
          </button>
          <button
            className="btn btn-primary rounded-pill px-4"
            style={{ background: "linear-gradient(90deg,#6a11cb,#2575fc)", border: "none" }}
            onClick={() => onSave(title, description)}
          >
            Save
          </button>
        </div>
      </div>

  
    </div>
  );
}
