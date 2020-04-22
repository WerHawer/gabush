import React from "react";
import css from "./Form.module.css";
import RowElement from "./RowElement";

const MainRow = ({ room, time, name, guests, party }) => (
  <tr className={css.mainRow}>
    <RowElement>{room}</RowElement>
    <RowElement>{time}</RowElement>
    <RowElement>{name}</RowElement>
    <RowElement>{guests}</RowElement>
    <RowElement>{party}</RowElement>
  </tr>
);

export default MainRow;
