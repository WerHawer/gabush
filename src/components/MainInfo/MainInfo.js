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

    <Link
      to={{
        pathname: "/newOrder",
      }}
      className="link main-info__new-order--link"
    >
      <Button customClass="main-info__new-order--btn">Новый заказ</Button>
    </Link>
  </>
);

export default MainInfo;
