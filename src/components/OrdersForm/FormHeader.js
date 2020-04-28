import React from "react";
import css from "./Form.module.css";
import HeaderElement from "./HeaderElement";

const FormHeader = () => (
  <ul className={css.headerWrapper}>
    <li className={css.headRow}>
      <HeaderElement>Номер зала</HeaderElement>
      <HeaderElement>Время</HeaderElement>
      <HeaderElement>ФИО</HeaderElement>
      <HeaderElement>Кол. гостей</HeaderElement>
      <HeaderElement>Приметки</HeaderElement>
    </li>
  </ul>
);

export default FormHeader;
