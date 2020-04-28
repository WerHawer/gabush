import React from "react";

const Input = ({
  type,
  value,
  name,
  onChange,
  id,
  reff,
  customClass,
  placeholder,
}) => (
  <input
    ref={reff}
    className={`basicInput ${customClass}`}
    id={id}
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default Input;
