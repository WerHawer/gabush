import React from "react";

const Input = ({ type, value, name, onChange, id, reff, customClass }) => (
  <input
    ref={reff}
    className={`${customClass}`}
    id={id}
    type={type}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={`${name}`}
  />
);

export default Input;
