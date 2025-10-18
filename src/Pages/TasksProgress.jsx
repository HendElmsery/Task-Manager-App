import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../Context/TasksContext'
import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from "react-router-dom";
import EditTaskModal from './EditTaskModal';

export default function TasksProgress() {
    let { tasks, getInProgress, updateCompleted, updateTask } = useContext(TasksContext)
    const [selectedTask, setSelectedTask] = useState(null);

    const [show, setshow] = useState("false")
    const navigate = useNavigate();

    function handleComplete(task_id) {
        updateCompleted(task_id)
        navigate('/completed_tasks')
        // if()
    }
    function openEdit(task) {
        setSelectedTask(task)

    }
    function closeModal() {
        setSelectedTask(null);
      }
    useEffect(() => {
        getInProgress()
    }, [])

    return (
        <div className="content-card">
            {selectedTask && (
                <EditTaskModal task={selectedTask} onClose={closeModal} />
            )}


            <h3 className="mb-4">In Progeress Task</h3>
            <div className='row'>

                {tasks.length > 0 ? tasks.map((task, index) => (
                    <div className='col' key={index}>
                        <div className='in-progress card p-3 m-2' >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>{task.created_at}</p>
                            <div className='row'>
                                <div className='col'>
                                    <button className='btn-primary bg-green'
                                        onClick={() => { openEdit(task) }}

                                    >Edit</button>
                                </div>
                                <div className='col'>
                                    {/* <Link to={'/completed_tasks'}> */}
                                    <button onClick={() => handleComplete(task.id)} className='btn bg-green' >Mark as completed</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div className='col'><p className='bg-red'>No In progress tasks</p></div>}
            </div>
        </div>
    )
}
