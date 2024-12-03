export default function CheckBox({ checked, onToggle }) {
  return (
    <label className="inline-flex items-center cursor-pointer ml-3">
      {/* Ẩn checkbox gốc */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="hidden"
      />
      <span
        className={`w-8 h-8 border-2 rounded-full ${
          checked ? "border-gray-300" : "border-gray-150"
        }`}
      >
        {/* Thêm dấu check khi được chọn */}
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="green"
            viewBox="0 0 25 25"
            strokeWidth="2"
            className="w-5 h-5 ml-1 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </span>
    </label>
  );
}
