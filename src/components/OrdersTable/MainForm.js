import React from "react";
import MainRow from "./MainRow";
import css from "./Form.module.css";

const MainForm = ({ orders }) => (
  <tbody className={css.main}>
    {orders.length > 0 ? (
      orders.map((el) => (
        <MainRow
          key={el.id}
          room={el.room}
          time={el.time}
          name={el.name}
          guests={el.guests}
          party={el.party}
        />
      ))
    ) : (
      <tr style={{ textAlign: "center", display: "block", paddingTop: "20px" }}>
        <td style={{ textAlign: "center", display: "block" }}>
          На эту дату заказов нет
        </td>
      </tr>
    )}
  </tbody>
);

export default MainForm;
