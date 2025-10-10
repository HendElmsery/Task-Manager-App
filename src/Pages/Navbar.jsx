import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav class="navbar  navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="dashboard">Dashboard</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="completed_tasks">Completed Tasks</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="task_progress">In Progress Tasks</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="new_task"><button className='btn btn-primary'>New Task</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="login"><button className='btn btn-primary'>Log out</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="signup"><button className='btn btn-primary'>Sign Up</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}