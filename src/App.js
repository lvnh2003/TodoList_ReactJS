import { useState } from "react";
import Menu from "./components/Section/Menu";
import AppContainer from "./components/Section/AppContainer";
import Footer from "./components/Section/Footer";
import useTasks from "./hook";
import { TAB_ALL, TAB_ACTIVE, TAB_COMPLETED } from "constant";

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
  
  const [currentTab, setCurrentTab] = useState(TAB_ALL);

  const filteredTasks = tasks.filter((task) => {
    if (currentTab === TAB_ACTIVE) return !task.isCompleted;
    if (currentTab === TAB_COMPLETED) return task.isCompleted;
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
