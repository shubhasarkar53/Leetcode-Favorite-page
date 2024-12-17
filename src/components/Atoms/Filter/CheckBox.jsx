import React, { useContext } from "react";
import { FilterContext } from "../../../contexts/filterContext";
function CheckBox({ item, index }) {
  const baseStyles = " font-medium capitalize";
  const easyStyle = "text-green-primary";
  const medStyle = "text-yellow-primary";
  const hardStyle = "text-red-primary";
  const [filterArr, setFilterArr] = useContext(FilterContext);

  function handleCheckBoxValue(event) {
    if (event.target.checked) {
      setFilterArr((prev) => [...prev, event.target.value]);
    } else {
      setFilterArr((prev) =>
        prev.filter((option) => option !== event.target.value)
      );
    }
  }

  //good pratice to have but because of "med" "medium" isuue commenting still
  const isChecked = filterArr.includes(item );

  return (
    <li key={index} className="flex items-center gap-2">
      <input
        onChange={handleCheckBoxValue}
        type="checkbox"
        checked={isChecked}
        id={index}
        name={item}
        // value={item == "medium" ? "med" : item }
        value={item }
        className="
  relative peer shrink-0
  appearance-none w-4 h-4 border border-white-secondary rounded-[4px] bg-transparent
  checked:bg-white-secondary checked:border-0 
  focus:outline-none focus:ring-offset-0 focus:ring-2 
  disabled:border-steel-400 disabled:bg-steel-400
"
      />
      <label
        className={`${
          (item == "easy" && easyStyle) ||
          (item == "medium" && medStyle) ||
          (item == "hard" && hardStyle) ||
          ""
        } ${baseStyles}`}
        htmlFor={index}
      >
        {item}
      </label>

      <svg
        className="
    absolute 
    w-4 h-4 
    hidden peer-checked:block
    pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <br />
    </li>
  );
}

export default CheckBox;
