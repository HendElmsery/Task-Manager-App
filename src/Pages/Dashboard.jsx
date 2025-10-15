import React, { useContext, useEffect, useMemo } from "react";
import { TasksContext } from "../Context/TasksContext";

export default function Dashboard() {
  const { tasks, getAllTasks } = useContext(TasksContext);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  // Calculate task counts
  const { total, inProgress, completed } = useMemo(() => {
    const total = tasks.length;
    const inProgress = tasks.filter((t) => t.status === "in-progress").length;
    const completed = tasks.filter((t) => t.status === "completed").length;
    return { total, inProgress, completed };
  }, [tasks]);

  return (
    <div className="content-card dashboard">
      <h3 className="fw-bold mb-4">Dashboard</h3>
      <div className="d-flex justify-content-around text-center">
        <div>
          <h2 className="fw-bold">{total}</h2>
          <p className="text-muted">Total</p>
        </div>
        <div>
          <h2 className="fw-bold text-warning">{inProgress}</h2>
          <p className="text-muted">In Progress</p>
        </div>
        <div>
          <h2 className="fw-bold text-success">{completed}</h2>
          <p className="text-muted">Completed</p>
        </div>
      </div>
    </div>
  );
}
