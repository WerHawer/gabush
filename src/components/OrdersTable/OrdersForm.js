import React from "react";
import FormHeader from "./FormHeader";
import MainForm from "./MainForm";
import css from "./Form.module.css";

const OrdersForm = ({ orders }) => (
  <table className={css.table}>
    <FormHeader />
    <MainForm orders={orders} />
  </table>
);

export default OrdersForm;
