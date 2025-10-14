import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../Context/TasksContext'
import { Link, Navigate } from 'react-router-dom'

export default function TasksProgress() {
    let { tasks, getInProgress, updateCompleted } = useContext(TasksContext)
    function handleComplete(){
        updateCompleted()
        // if()
    }
    useEffect(() => {
        getInProgress()

        //   return () => {
        //     second
        //   }
    }, [])

    return (
        <div className="content-card">

            <h3 className="mb-4">New Task</h3>
            <div className='row'>
                {tasks ? tasks.map((task, index) => (
                    <div className='col'key={index}>
                        <div className='in-progress card p-3 m-2' >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>{task.created_at}</p>
                            <div className='row'>
                                <div className='col'>
                                    <button className='btn-primary bg-green'>Edit</button>
                                </div>
                                <div className='col'>
                                    {/* <Link to={'/completed_tasks'}> */}
                                        <button onClick={handleComplete}className='btn bg-green' >Mark as completed</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ""}
            </div>
        </div>
    )
}
