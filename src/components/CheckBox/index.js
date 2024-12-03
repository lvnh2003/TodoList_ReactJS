import checkbox from "components/Image/checkbox.svg";
export default function CheckBox({ checked, onToggle }) {
  return (
    <label className="inline-flex items-center cursor-pointer ml-3">
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
        {checked && (
          <img src={checkbox} alt="checkmark" className="w-5 h-5 ml-1 mt-1" />
        )}
      </span>
    </label>
  );
}
