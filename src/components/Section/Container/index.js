import { useState } from "react";
import CheckBoxAll from "../../CheckBoxAll";

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
      <div className="items-center flex flex-col justify-center">
        <h1 className="text-[rgba(175,47,47,0.15)] text-[100px] font-light text-center">
          todos
        </h1>
        <div
          className="min-w-[550px] border border-neutral-100 shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)] flex flex-col mx-auto my-0 border-solid;
  font-family: Helvetica Neue,sans-serif"
        >
          <div className="item border-b-[#ededed] border-b border-solid search-place">
            <div className="">
              <form onSubmit={handleAddTask}>
                <CheckBoxAll checked={isAllCompleted} onToggle={onToggleAll} />
                <input
                  type="text"
                  placeholder="What needs to be done?"
                  value={newTask}
                  onChange={onInputChange}
                  className="ml-0 text-2xl italic"
                />
              </form>
            </div>
          </div>
          <div className="item">{children}</div>
        </div>
      </div>
    </>
  );
}
export default AppContainer;
