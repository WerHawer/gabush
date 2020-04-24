import React, { Component } from "react";
import flatpickr from "flatpickr";
import { Link } from "react-router-dom";
import OrdersForm from "../OrdersTable/OrdersForm";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default class MainInfo extends Component {
  state = { input: null, filteredOrders: [] };

  componentDidMount() {
    this.setState({ input: document.querySelector("#dataPicker") });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      flatpickr("#dataPicker", {
        mode: "range",
        inline: true,
        dateFormat: "d.m.Y",
        onChange: function (selectedDates, dateStr, instance) {
          //отправка запроса с выбранной датой. Фильтровать по выбору только одной даты.
        },
      });
    }
  }
  render() {
    const { filteredOrders } = this.state;
    return (
      <div className="wrapper mainPage-wrapper">
        <div className="datePickerWrapper">
          <Input customClass="none" type="text" id="dataPicker" />
        </div>

        <OrdersForm orders={filteredOrders} />
        <Link
          to={{
            pathname: "/newOrder",
            state: { from: "/" },
          }}
          className="link new-order-button"
        >
          <Button>Новый заказ</Button>
        </Link>
      </div>
    );
  }
}
