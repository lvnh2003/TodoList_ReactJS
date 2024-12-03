import { useState } from "react";
import "./App.css";
import Menu from "./components/Section/Body";
import AppContainer from "./components/Section/Container";
import Footer from "./components/Section/Footer";
import useTasks from "./hook";
export default function App() {
  const {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskCompletion,
    clearCompletedTasks,
    toggleAllTaskCompletion,
  } = useTasks();
  const [currentTab, setCurrentTab] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (currentTab === "Active") return !task.isCompleted;
    if (currentTab === "Completed") return task.isCompleted;
    return true;
  });

  const remainingTasks = tasks.filter((task) => !task.isCompleted).length;

  return (
    <AppContainer
      onAddTask={addTask}
      onToggleAll={toggleAllTaskCompletion}
      tasks={tasks}
    >
      <Menu
        items={filteredTasks}
        onToggle={toggleTaskCompletion}
        onDelete={deleteTask}
        onEdit={editTask}
      />
      <Footer
        remainingTasks={remainingTasks}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onClearCompleted={clearCompletedTasks}
      />
    </AppContainer>
  );
}
