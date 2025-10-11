import React from "react";

export default function NewTask() {
  return (
    <div className="content-card">
      <h3 className="mb-4">New Task</h3>

      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" placeholder="Enter task title" />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Enter task description"
            rows="3"
          ></textarea>
        </div>

        <button type="submit" className="btn-save">
          Save
        </button>
      </form>
    </div>
  );
}
