import { TAB_ACTIVE, TAB_ALL, TAB_COMPLETED } from "constant";

function Footer({ remainingTasks, currentTab, onTabChange, onClearCompleted }) {
  return (
    <footer className="flex justify-between items-center px-4 py-2 border-t border-gray-300 text-gray-500 text-sm">
      <span>{remainingTasks} item left</span>
      <div className="flex space-x-4">
        <button
          className={`px-3 py-1 rounded-md border ${
            currentTab === "All"
              ? "border-red-200 text-gray-900"
              : "border-transparent"
          }`}
          onClick={() => onTabChange(TAB_ALL)}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            currentTab === "Active"
              ? "border-red-200 text-gray-900"
              : "border-transparent"
          }`}
          onClick={() => onTabChange(TAB_ACTIVE)}
        >
          Active
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            currentTab === "Completed"
              ? "border-red-200 text-gray-900"
              : "border-transparent"
          }`}
          onClick={() => onTabChange(TAB_COMPLETED)}
        >
          Completed
        </button>
      </div>
      <button
        className="text-gray-500 hover:underline"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
