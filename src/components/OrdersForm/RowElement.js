import React from "react";
import css from "./Form.module.css";

const RowElement = ({ children }) => (
  <div className={css.mainElement}>{children}</div>
);

export default RowElement;
