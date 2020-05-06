import React from "react";
import Counter from "../utils/Counter";

const MenuElement = ({ el, onClick }) => (
  <li className="menu-list__element" id={el.id}>
    <img className="menu-list__img" src={el.img} alt={el.name} />
    <p className="menu-list__element-name">
      {el.name} {el.price}грн./шт.
    </p>
    <Counter onClick={onClick} mount={el.mount} />
  </li>
);

export default MenuElement;
