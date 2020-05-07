import React from "react";
import Delete from "../../img/delete.png";

const OrderListElement = ({ el, index, onClick }) => {
  const { name, mount, price, id } = el;

  return (
    <li className="orderListElement" id={id}>
      <span>{index + 1}.</span>{" "}
      <span className="orderListElement__name">{name}</span>{" "}
      <span className="orderListElement__mount">{mount}шт.</span> -{" "}
      <span>{price * mount}грн.</span>
      <img
        src={Delete}
        alt="delete"
        onClick={onClick}
        className="orderListElement__delete-btn"
      />
    </li>
  );
};

export default OrderListElement;
