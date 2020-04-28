import React from "react";

const MenuInfoEl = ({ el }) => {
  const { name, price, mount } = el;

  return (
    <li className="menu-info__el">
      <p className="menu-info__category menu-info__category--dish">{name}</p>
      <p className="menu-info__category">{price} грн.</p>
      <p className="menu-info__category">{mount}</p>
      <p className="menu-info__category">{price * mount} грн.</p>
    </li>
  );
};

export default MenuInfoEl;
