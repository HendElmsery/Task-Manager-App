
import './App.css';
import{Route,Routes} from "react-router-dom"
import Dashboard from './Pages/Dshboard';
import CompletedTasks from './Pages/CompletedTasks';
import TasksProgress from './Pages/TasksProgress';
import NewTask from './Pages/NewTask';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='completed_tasks' element={<CompletedTasks/>}/>
      <Route path='task_progress' element={<TasksProgress/>}/>
      <Route path='new_task' element={<NewTask/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
