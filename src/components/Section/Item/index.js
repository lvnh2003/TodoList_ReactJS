import { useState } from "react";
import CheckBox from "components/CheckBox";
import deleteImg from 'components/Image/delete.svg';

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
    <div className="relative border-b border-solid border-[#ededed] text-2xl group">
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
                className="border-gray-300 w-full ml-0 focus:outline-none"
              />
            </form>
          ) : (
            <p
              className={isCompleted ? "text-[#d1d1d1] line-through ml-0" : "ml-0"}
              onDoubleClick={handleDoubleClick}
            >
              {value}
            </p>
          )}
        </div>
      </div>
          {/* need to remove cursor when hover */}
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <button
          onClick={() => onDelete(id)}
          className="hidden group-hover:block p-2 text-red-500 duration-[0.3s] ease-[ease]"
        >
          <img src={deleteImg} alt="delete" className="w-6 h-6 ml-1 mt-1 hover:none" />
        </button>
      </div>
    </div>
  );
}
