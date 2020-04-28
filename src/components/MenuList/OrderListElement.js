import React from "react";

const OrderListElement = ({ el, index }) => {
  const { name, mount, price } = el;

  return (
    <li className="orderListElement">
      <span>{index + 1}.</span>{" "}
      <span className="orderListElement__name">{name}</span>{" "}
      <span className="orderListElement__mount">{mount}шт.</span> -{" "}
      <span>{price * mount}грн.</span>
    </li>
  );
};

export default OrderListElement;
