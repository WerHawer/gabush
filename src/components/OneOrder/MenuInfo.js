import React from "react";
import MenuInfoEl from "./MenuInfoEl";

const MenuInfo = ({ dishes }) => (
  <ul>
    {dishes && dishes.length > 0 ? (
      dishes.map((el) => <MenuInfoEl key={el.id} el={el} />)
    ) : (
      <li>No food in this order</li>
    )}
  </ul>
);

export default MenuInfo;
