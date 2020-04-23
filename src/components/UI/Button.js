import React from "react";

const Button = ({ type = "button", children, onClick, customClass }) => (
  <button
    className={`basicButton ${customClass}`}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
