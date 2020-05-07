import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Notification = ({ onClick, isEdit }) => (
  <div className="notification-wrapper">
    <div className="notification">
      <p className="notification-text">
        {isEdit ? "Заказ успешно изменён" : "Заказ успешно создан"}
      </p>

      <div className="notification-btn__container">
        <Link to="/" onClick={onClick}>
          <Button>Ok</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Notification;
