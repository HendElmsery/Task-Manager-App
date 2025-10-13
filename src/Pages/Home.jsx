import React from 'react'
import Navbar from './Navbar'
import NewTask from './NewTask'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'

export default function Home() {
  return (
        <div className="sidebar d-flex flex-column justify-content-between">

        <Navbar/>
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">

        </div>
       

    </div>
  )
}

