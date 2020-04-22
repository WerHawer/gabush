import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import OrdersForm from "../OrdersTable/OrdersForm";
// import css from "./MainInfo.module.css";

const MainInfo = () => (
  <div className="wrapper">
    <DatePicker />
    <OrdersForm />
  </div>
);

export default MainInfo;
