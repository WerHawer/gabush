import React from "react";

const IngridientsEl = ({ ingridients, el }) => (
  <li className="menu-info__el">
    <p className="menu-info__category menu-info__category--dish">{el}</p>
    <p className="menu-info__category">{ingridients[el]} гр.</p>
    <p className="menu-info__category"></p>
  </li>
);

export default IngridientsEl;
