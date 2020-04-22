import React from "react";
import css from "./Form.module.css";
import HeaderElement from "./HeaderElement";

const FormHeader = () => (
  <thead className={css.headerWrapper}>
    <tr className={css.headRow}>
      <HeaderElement>Номер зала</HeaderElement>
      <HeaderElement>Время</HeaderElement>
      <HeaderElement>ФИО</HeaderElement>
      <HeaderElement>Кол. гостей</HeaderElement>
      <HeaderElement>Приметки</HeaderElement>
    </tr>
  </thead>
);

export default FormHeader;
