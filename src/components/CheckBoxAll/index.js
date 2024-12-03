import checkbox from "components/Image/checkboxall.svg";
import checkbox_off from "components/Image/checkboxall _off.svg";
export default function CheckBoxAll({ checked, onToggle }) {
  return (
    <label className="inline-flex items-center cursor-pointer ml-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="hidden"
      />
      <span>
        <img
          src={checked ? checkbox : checkbox_off}
          alt="checkmark"
          className="w-5 h-5 ml-1 mt-1"
        />
      </span>
    </label>
  );
}
