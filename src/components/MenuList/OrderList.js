import React from "react";
import OrderListElement from "./OrderListElement";

const OrderList = ({ menu, order }) => (
  <div className="orderList">
    <div className="orderList__order-info">
      <p className="order-info__time">{order.date}</p>
      <p className="order-info__name"> {order.name}</p>
      <p className="order-info__room">Зал: {order.room}</p>{" "}
      <p className="order-info__room">Гостей: {order.guests}</p>
    </div>
    <ul>
      {menu.length > 0 ? (
        menu.map((el, index) => (
          <OrderListElement el={el} key={el.id} index={index} />
        ))
      ) : (
        <h2>Ни одно блюдо ещё не выбрано</h2>
      )}
    </ul>
  </div>
);

export default OrderList;
