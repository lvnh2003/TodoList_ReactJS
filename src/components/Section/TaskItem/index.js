import { useState } from "react";
import CheckBox from "../../CheckBox";

export default function Item({
  id,
  value,
  isCompleted,
  onDelete,
  onEdit,
  onToggle,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleDoubleClick = () => setIsEditing(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editValue.trim()) {
      onEdit(id, editValue);
    } else {
      onDelete(id);
    }
    setIsEditing(false);
  };

  const handleChange = (e) => setEditValue(e.target.value);

  return (
    <div className="relative border-b border-solid border-[#ededed] task-item text-2xl">
      <div className="flex items-center">
        <CheckBox checked={isCompleted} onToggle={() => onToggle(id)} />

        <div className="flex-1 p-4 relative">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={editValue}
                onChange={handleChange}
                onBlur={handleSubmit}
                autoFocus
                className="border-gray-300 w-full ml-0"
              />
            </form>
          ) : (
            <p
              className={isCompleted ? "text-completed ml-0" : "ml-0"}
              onDoubleClick={handleDoubleClick}
            >
              {value}
            </p>
          )}
        </div>
      </div>

      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => onDelete(id)}
          className="delete-btn p-2 text-red-500 duration-[0.3s] ease-[ease]"
        >
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
