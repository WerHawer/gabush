import React from "react";
import OrderListElement from "./OrderListElement";

const OrderList = ({ menu, order }) => (
  <div className="orderList">
    <ul>
      <li>
        {order.name} {order.date}
      </li>
      {menu.length > 0 ? (
        menu.map((el) => <OrderListElement el={el} key={el.id} />)
      ) : (
        <h2>Ни одно блюдо ещё не выбрано</h2>
      )}
    </ul>
  </div>
);

export default OrderList;
