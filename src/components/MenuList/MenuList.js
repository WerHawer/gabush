import React from "react";
import { Link, Route } from "react-router-dom";
import MenuElement from "./MenuElement";
import OrderList from "./OrderList";
import Button from "../UI/Button";
import Notification from "./Notification";

const MenuList = ({
  order,
  menu,
  filteredMenu,
  onClick,
  onSaveClick,
  notificationOk,
  orderIsReady,
}) => (
  <>
    {orderIsReady && <Notification onClick={notificationOk} />}

    <div className="menu-list__wrapper">
      <ul className="menu-list">
        {menu.map((el) => (
          <MenuElement key={el.id} el={el} onClick={onClick} />
        ))}
      </ul>

      <Button
        type="submit"
        name="saveDishes"
        onClick={() => onSaveClick(filteredMenu)}
        customClass="menu-list__saveBtn"
      >
        Save
      </Button>
    </div>

    <OrderList menu={filteredMenu} order={order} />
  </>
);

export default MenuList;
