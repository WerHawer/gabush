import React from "react";
import MainRow from "./MainRow";
import css from "./Form.module.css";

const MainForm = ({ orders }) => (
  <ul className={css.main}>
    {orders.length > 0 ? (
      orders.map((el) => (
        <MainRow
          key={el.id}
          id={el.id}
          room={el.room}
          date={el.date}
          name={el.name}
          guests={el.guests}
          comment={el.comment}
        />
      ))
    ) : (
      <li style={{ textAlign: "center", display: "block", paddingTop: "20px" }}>
        <p style={{ textAlign: "center", display: "block" }}>
          На эту дату заказов нет
        </p>
      </li>
    )}
  </ul>
);

export default MainForm;
