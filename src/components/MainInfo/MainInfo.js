import React, { Component } from "react";
import flatpickr from "flatpickr";
import { Link } from "react-router-dom";
import DatePicker from "../DatePicker/DatePicker";
import OrdersForm from "../OrdersTable/OrdersForm";
import Button from "../UI/Button";

export default class MainInfo extends Component {
  state = { input: null };

  componentDidMount() {
    this.setState({ input: document.querySelector("#dataPicker") });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      const calendar = flatpickr("#dataPicker", {
        mode: "range",
        inline: true,

        onChange: function (selectedDates, dateStr, instance) {
          //отправка запроса с выбранной датой. Фильтровать по выбору только одной даты.
        },
      });

      this.setState({ input: document.querySelector("#dataPicker") });
    }
  }
  render() {
    return (
      <div className="wrapper">
        <DatePicker />
        <OrdersForm />
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
