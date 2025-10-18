import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../Context/TasksContext'
export default function CompletedTasks() {
  let { tasks, getCompleted } = useContext(TasksContext)
  useEffect(() => {
    getCompleted()
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="content-card">

      <h3 className="mb-4">Completed Task</h3>
      <div className='row'>

        {tasks.length > 0 ? tasks.map((task, index) => (
          <div className='col' key={index}>
            <div className='in-progress card p-3 m-2' >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>{task.created_at}</p>
             
            </div>
          </div>
        )) : <div className='col'><p className='bg-red'>No Completed tasks</p></div>}
      </div>
    </div>)
}
