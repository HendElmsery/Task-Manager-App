// src/Context/TasksContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { UserContext } from "./UserContext";
// Export context properly so it can be imported
export const TasksContext = createContext(0);

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const {user,setUer}= useContext(UserContext)

  //  Create a new task
  const createTask = async (title, description) => {
    // const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      console.error("No user logged in");
      return;
    }
    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          title,
          description,
          status: "in-progress",
          user_id: user.id, 
          created_at: new Date(),
        },
      ])
      .select();

    if (error) {
      console.error("Error creating task:", error.message);
      return null;
    } else {
      setTasks((prev) => [data[0], ...prev]);
      return data[0]; //return new task to use it in component
    }
  };
  //Get In-progress Tasks
  const getInProgress =async()=>{
    if (!user) return [];

    let { data, error } = await supabase
  .from('tasks')
  .select("*")
  .eq("user_id", user.id)
  .eq("status", "in-progress")
  .order("created_at", { ascending: false })
  if (error) {
    console.error("Error getting task:", error.message);
    return null;
  } else {
    setTasks(data);
    console.log("In progress",data)
    return data; 
  }
  }
  //Get Completed Task
  const updateCompleted =async()=>{
    if (!user) return [];

    let { data, error } = await supabase
  .from('tasks')
 
  .update({ completed: true })
  .eq("user_id", user.id)
//   .eq("id", task_id)
  .select()
//   .order("created_at", { ascending: false })
  if (error) {
    console.error("Error getting task:", error.message);
    return null;
  } else {
    setTasks(data);
    console.log("Completed",data)
    return data; 
  }
  }
  //update task

  return (
    <TasksContext.Provider value={{ createTask,getInProgress, tasks,updateCompleted }}>
      {children}
    </TasksContext.Provider>
  );
}
