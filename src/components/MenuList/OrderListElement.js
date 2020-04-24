import React from "react";

const OrderListElement = ({ el }) => (
  <>
    <li>
      {el.name} {el.mount}
    </li>
  </>
);

export default OrderListElement;
