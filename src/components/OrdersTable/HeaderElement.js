import React from "react";
import css from "./Form.module.css";

const HeaderElement = ({ children }) => (
  <th className={css.headElement}>{children}</th>
);

export default HeaderElement;
