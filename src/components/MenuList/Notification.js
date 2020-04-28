import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Notification = ({ onClick }) => (
  <div className="notification-wrapper">
    <div className="notification">
      <p className="notification-text">Заказ успешно создан</p>

      <div className="notification-btn__container">
        <Link to="/" onClick={onClick}>
          <Button>Ok</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Notification;
