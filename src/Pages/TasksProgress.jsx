import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../Context/TasksContext'

export default function TasksProgress() {
    let {tasks, getInProgress} =useContext(TasksContext)
    useEffect(() => {
      getInProgress()
    
    //   return () => {
    //     second
    //   }
    }, [])
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between">

            <h3 className="mb-4">New Task</h3>
            {tasks?tasks.map((task,index)=>(
                <div className='card' key={index}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.created_at}</p>
                </div>
            )):""}
            </div>
    )
}
