import React from "react";
import css from "./Form.module.css";

const RowElement = ({ children }) => (
  <td className={css.mainElement}>{children}</td>
);

export default RowElement;
