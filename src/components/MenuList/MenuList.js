import React from "react";
import MenuElement from "./MenuElement";
import OrderList from "./OrderList";
import Button from "../UI/Button";

const MenuList = ({ order, menu, filteredMenu, onClick, onSaveClick }) => (
  <>
    <ul className="menu-list">
      {menu.map((el) => (
        <MenuElement key={el.id} el={el} onClick={onClick} />
      ))}
    </ul>
    <Button
      type="submit"
      name="saveDishes"
      onClick={() => onSaveClick(filteredMenu)}
    >
      Save
    </Button>
    <OrderList menu={filteredMenu} order={order} />
  </>
);

export default MenuList;
