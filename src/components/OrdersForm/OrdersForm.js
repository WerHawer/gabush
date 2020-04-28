import React from "react";
import FormHeader from "./FormHeader";
import MainForm from "./MainForm";
import css from "./Form.module.css";

const OrdersForm = ({ orders }) => (
  <div className={css.table}>
    <FormHeader />
    <MainForm orders={orders} />
  </div>
);

export default OrdersForm;
