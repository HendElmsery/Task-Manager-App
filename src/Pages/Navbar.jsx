import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

export default function Navbar() {
    let{logOut,user} =useContext(UserContext)
    const handlelogout =async ()=>{

        const data = await logOut()
        // if(data){
        //     navigate('/login');

        // }
    }
    return (
        <div className=" ">

        <div>
          <div className="mb-4">
            <p className="mb-1">Welcome,</p>
            <h5>{user.email}</h5>
          </div>
  
          <nav>
            <Link className="focus-ring " to="/dashboard">Dashboard</Link>
            <Link  to="/completed_tasks">Completed Tasks</Link>
            <Link to="/task_progress">In Progress Tasks</Link>
            <Link  to="/new_task"><button className='newtask-button'>New Task</button></Link>
          </nav>
        </div>
        
        <Link  to="/login"><button  onClick={handlelogout} className='newtask-button'>Logout</button></Link>
      </div>
    )
}