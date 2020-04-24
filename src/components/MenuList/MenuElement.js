import React from "react";
import Counter from "../utils/Counter";

const MenuElement = ({ el, onClick }) => (
  <li className="menu-list__element" id={el.id}>
    <img className="menu-list__img" src={el.img} alt={el.name} />
    <Counter onClick={onClick} />
    <p>{el.name}</p>
  </li>
);

export default MenuElement;
