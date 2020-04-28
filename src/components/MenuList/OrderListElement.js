import React from "react";

const OrderListElement = ({ el, index }) => (
  <li className="orderListElement">
    <span>{index + 1}.</span>{" "}
    <span className="orderListElement__name">{el.name}</span>{" "}
    <span>{el.mount}шт.</span>
  </li>
);

export default OrderListElement;
