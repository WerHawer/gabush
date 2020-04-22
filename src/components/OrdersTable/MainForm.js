import React from "react";
import MainRow from "./MainRow";
import css from "./Form.module.css";

const orders = [
  {
    id: 1,
    room: 1,
    time: "18:00",
    name: "Антон Полищук",
    guests: 156,
    party: "Детский ДР",
  },
  {
    id: 2,
    room: 2,
    time: "18:00",
    name: "Константин Дмитренко",
    guests: 13,
    party: "Взрослый ДР",
  },
];

// временное решение, пока не будет готов бэк
const MainForm = () => (
  <tbody className={css.main}>
    {orders.map((el) => (
      <MainRow
        key={el.id}
        room={el.room}
        time={el.time}
        name={el.name}
        guests={el.guests}
        party={el.party}
      />
    ))}
  </tbody>
);

export default MainForm;
