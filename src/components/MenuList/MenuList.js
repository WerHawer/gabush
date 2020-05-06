import React from "react";
import { Link } from "react-router-dom";
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
    {orderIsReady && (
      <Notification
        onClick={() => {
          notificationOk();
        }}
      />
    )}

    <div className="menu-list__wrapper">
      <Link to="/home" className="newOrder__toMain-link">
        <Button type="button">На главнаю</Button>
      </Link>

      <ul className="menu-list">
        {menu.map((el) => (
          <MenuElement key={el.id} el={el} onClick={onClick} />
        ))}
      </ul>

      <Button
        type="button"
        name="saveDishes"
        onClick={() => onSaveClick(filteredMenu)}
        customClass="menu-list__saveBtn"
      >
        сохранить
      </Button>
    </div>

    <OrderList menu={filteredMenu} order={order} />
  </>
);

export default MenuList;
