import { useState } from "react";
import initialTasks from "data";

export default function useTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  
  function filterData() {
    setTasks((prevTasks) => prevTasks.map((task, i) => ({ ...task, id: i })));
  }

  const addTask = (taskValue) => {
    if (taskValue.trim()) {
      setTasks((prevTasks) => {
        const lastTaskId = prevTasks.length > 0 ? prevTasks[prevTasks.length - 1].id : -1;
        return [
          ...prevTasks,
          { id: lastTaskId + 1, value: taskValue, isCompleted: false },
        ];
      });
    }
  };
  
  const editTask = (taskId, taskValue) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, value: taskValue } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
  };

  const toggleAllTaskCompletion = () => {
    const allCompleted = tasks.every((task) => task.isCompleted);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, isCompleted: !allCompleted }))
    );
  };

  return {
    tasks,
    setTasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    clearCompletedTasks,
    toggleAllTaskCompletion,
  };
}
