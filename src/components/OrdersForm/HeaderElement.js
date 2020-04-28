import React from "react";
import css from "./Form.module.css";

const HeaderElement = ({ children }) => (
  <div className={css.headElement}>{children}</div>
);

export default HeaderElement;
