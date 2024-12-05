import { useState } from "react";
import CheckBoxAll from "components/CheckBoxAll";

function AppContainer({ children, onAddTask, onToggleAll, tasks }) {
  const [newTask, setNewTask] = useState("");

  function onInputChange(e) {
    setNewTask(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask("");
  };

  const isAllCompleted = tasks.every((task) => task.isCompleted);

  return (
    <>
      <div className="items-center flex flex-col justify-center select-none">
        <h1 className="text-[rgba(175,47,47,0.15)] text-[100px] font-light text-center">
          todos
        </h1>
        <div
          className="has-before min-w-[550px] border border-neutral-100 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)] flex flex-col mx-auto my-0 border-solid relative"
        >
          <div className="item border-b-[#ededed] border-b border-solid py-5 pl-5">
            <div>
              <form onSubmit={handleAddTask}>
                <CheckBoxAll checked={isAllCompleted} onToggle={onToggleAll} />
                <input
                  type="text"
                  placeholder="What needs to be done?"
                  value={newTask}
                  onChange={onInputChange}
                  className="ml-0 text-2xl text-[#F6F6F6] focus:text-black placeholder:italic pl-[35px] focus:outline-none"
                />
              </form>
            </div>
          </div>
          <div className="item">{children}</div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-4 p-12">
        <p>Double click to edit task</p>
        <p>Todolist ReactJS</p>
      </div>
    </>
  );
}

export default AppContainer;
