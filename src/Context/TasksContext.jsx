import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { UserContext } from "./UserContext";

export const TasksContext = createContext();

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const { user, setUser } = useContext(UserContext);

  // Create a new task
  const createTask = async (title, description) => {
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
    }

    setTasks((prev) => [data[0], ...prev]);
    return data[0];
  };

  // Get In-progress Tasks
  const getInProgress = async () => {
    if (!user) return [];
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "in-progress")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error getting tasks:", error.message);
      return [];
    }
    setTasks(data);
    return data;
  };

  // Update to Completed Task
  const updateCompleted = async (task_id) => {
    if (!user) return [];

    const { data, error } = await supabase
      .from("tasks")
      .update({ status: "completed" })
      .eq("user_id", user.id)
      .eq("id", task_id)
      .select();

    if (error) {
      console.error("Error updating task:", error.message);
      return [];
    }

    setTasks((prev) =>
      prev.map((t) => (t.id === task_id ? { ...t, status: "completed" } : t))
    );
    return data;
  };

  // Get completed tasks
  const getCompleted = async () => {
    if (!user) return [];
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "completed");

    if (error) {
      console.error("Error getting completed tasks:", error.message);
      return [];
    }

    setTasks(data);
    return data;
  };

  // Get all tasks
  const getAllTasks = async () => {
    if (!user) return [];
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error getting all tasks:", error.message);
      return [];
    }

    setTasks(data);
    return data;
  };

  // Update task title/description
  const updateTask = async (title, description, task_id) => {
    if (!user) return [];

    const { data, error } = await supabase
      .from("tasks")
      .update({ title, description })
      .eq("id", task_id)
      .select();

    if (error) {
      console.error("Error updating task:", error.message);
      return [];
    }

    setTasks((prev) =>
      prev.map((t) =>
        t.id === task_id ? { ...t, title, description } : t
      )
    );
    return data;
  };

  return (
    <TasksContext.Provider
      value={{
        createTask,
        getInProgress,
        tasks,
        updateCompleted,
        getCompleted,
        getAllTasks,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
