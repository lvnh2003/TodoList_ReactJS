export default function CheckBoxAll({ checked, onToggle }) {
  return (
    <label className="inline-flex items-center cursor-pointer ml-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="hidden"
      />
      <span className="">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={`${checked ? "black" : "#D1D5DB"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </label>
  );
}
