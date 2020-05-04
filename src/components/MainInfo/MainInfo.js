import React from "react";
import { Link } from "react-router-dom";
import OrdersForm from "../OrdersForm/OrdersForm";
import Button from "../UI/Button";
import Input from "../UI/Input";
import css from "../OrdersForm/Form.module.css";

const MainInfo = ({ orders }) => (
  <>
    <div className={css.tableContainer}>
      <div className="datePickerWrapper">
        <Input customClass="none" type="text" id="dataPicker" />
      </div>
      <OrdersForm orders={orders} />
    </div>

    <div className="main-info__btn-container">
      <Link
        to={{
          pathname: "/newOrder",
        }}
        className="link"
      >
        <Button customClass="main-info__new-order--btn">Новый заказ</Button>
      </Link>

      <Link to="/home/orderIngridients" className="link">
        <Button customClass="main-info__buy--btn">Закупки</Button>
      </Link>
    </div>
  </>
);

export default MainInfo;
