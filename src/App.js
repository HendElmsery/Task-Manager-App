import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import CompletedTasks from './Pages/CompletedTasks';
import TasksProgress from './Pages/TasksProgress';
import NewTask from './Pages/NewTask';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './Pages/Navbar';
import { UserContextProvider, UserContext } from './Context/UserContext';
import ProtectedRoute from './Pages/ProtectedRoute';
import { useContext } from 'react';
import TasksContextProvider from './Context/TasksContext';

function AppContent() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user && <Navbar />} {/* Show navbar only when logged in */}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
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
        <Route
          path="/task_progress"
          element={
            <ProtectedRoute>
              <TasksProgress />
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
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <TasksContextProvider>

          <AppContent />
      </TasksContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
