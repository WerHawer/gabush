import React from "react";
import css from "./Form.module.css";
import RowElement from "./RowElement";
import { Link } from "react-router-dom";

const MainRow = ({ room, date, name, guests, comment, id }) => (
  <li>
    <Link to={`/home/order/${id}`} className={css.mainRow}>
      <RowElement>{room}</RowElement>
      <RowElement>{date}</RowElement>
      <RowElement>{name}</RowElement>
      <RowElement>{guests}</RowElement>
      <RowElement>{comment}</RowElement>
    </Link>
  </li>
);

export default MainRow;
