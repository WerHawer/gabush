import React from "react";
import MenuInfoEl from "./MenuInfoEl";

const MenuInfo = ({ dishes = [] }) => {
  const totalPrice = dishes.reduce((acc, el) => acc + el.price * el.mount, 0);

  return (
    <>
      <ul className="menu-info__list">
        <div className="total-price">
          <p>Сумма:</p>
          <p>{totalPrice} грн.</p>
        </div>
        {dishes && dishes.length > 0 ? (
          dishes.map((el) => <MenuInfoEl key={el.id} el={el} />)
        ) : (
          <li>No food in this order</li>
        )}
      </ul>
    </>
  );
};

export default MenuInfo;
