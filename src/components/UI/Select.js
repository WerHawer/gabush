import React, { useState } from "react";

const Select = ({
  options = [],
  customClass,
  name,
  id,
  placeholder,
  value,
  onChange,
}) => {
  const [isLabelVisible, setIsLabelVisible] = useState(true);

  return (
    <div className="select-container">
      <label
        htmlFor={id}
        className={`select-label ${isLabelVisible && "none"}`}
        onClick={() => setIsLabelVisible(false)}
      >
        {placeholder}
      </label>
      <select
        className={`basicSelect ${customClass}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
