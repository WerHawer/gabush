import React from "react";
import OrderListElement from "./OrderListElement";

const OrderList = ({ menu, order }) => {
  const allPrice = menu.reduce((acc, el) => acc + el.price * el.mount, 0);

  return (
    <div className="orderList">
      <div className="orderList__order-info">
        <p className="order-info__time">{order.date}</p>
        <p className="order-info__name"> {order.name}</p>
        <p className="order-info__room">Зал: {order.room}</p>{" "}
        <p className="order-info__guests">Гостей: {Number(order.guests)}</p>
      </div>
      <ul className="orderList-dishes-list">
        {menu.length > 0 ? (
          menu.map((el, index) => (
            <OrderListElement el={el} key={el.id} index={index} />
          ))
        ) : (
          <h2>Ни одно блюдо ещё не выбрано</h2>
        )}
      </ul>

      <p className="order-info__price">Всего: {allPrice}грн.</p>
    </div>
  );
};

export default OrderList;
