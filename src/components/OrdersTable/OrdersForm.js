import React from "react";
import FormHeader from "./FormHeader";
import MainForm from "./MainForm";
import css from "./Form.module.css";

const OrdersForm = () => (
  <table className={css.table}>
    <FormHeader />
    <MainForm />
  </table>
);

export default OrdersForm;
