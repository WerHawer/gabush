import React from "react";

const Button = ({ type = "button", children, onClick, customClass, name }) => (
  <button
    className={`basicButton ${customClass}`}
    type={type}
    onClick={onClick}
    name={name}
  >
    {children}
  </button>
);

export default Button;
