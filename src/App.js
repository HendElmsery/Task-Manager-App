import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CompletedTasks from "./Pages/CompletedTasks";
import TasksProgress from "./Pages/TasksProgress";
import NewTask from "./Pages/NewTask";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./Pages/Navbar";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { UserContextProvider, UserContext } from "./Context/UserContext";
import { useContext } from "react";
import TasksContextProvider from "./Context/TasksContext";
import ToastContextProvider from "./Context/ToastContext";

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <div className="app-wrapper">
      {user && (
        <aside className="sidebar">
          <Navbar />
        </aside>
      )}
      <main className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new_task"
            element={
              <ProtectedRoute>
                <NewTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/task_progress"
            element={
              <ProtectedRoute>
                <TasksProgress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/completed_tasks"
            element={
              <ProtectedRoute>
                <CompletedTasks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <TasksContextProvider>
        <ToastContextProvider>
        <AppContent />
        </ToastContextProvider>
       
      </TasksContextProvider>
    </UserContextProvider>
  );
}

