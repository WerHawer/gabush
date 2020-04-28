import React, { Component } from "react";
import { Route } from "react-router-dom";
import flatpickr from "flatpickr";
import MainInfo from "../MainInfo/MainInfo";
import OrderPage from "../Pages/OrderPage";

export default class HomePage extends Component {
  state = { input: null, filteredOrders: [], filterDates: [] };

  componentDidMount() {
    this.setState({ input: document.querySelector("#dataPicker") });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      flatpickr("#dataPicker", {
        mode: "range",
        inline: true,
        dateFormat: "d.m.Y",
        onReady: () => {
          const H = new Date(Date.now()).getHours();
          const M = new Date(Date.now()).getMinutes();
          const ms = (H * 60 + M) * 60 * 1000;

          const startDate = Date.now() - ms;
          const endDate = startDate + 86400000;

          this.setState({ filterDates: [startDate, endDate] });
        },
        onChange: (selectedDates, dateStr, instance) => {
          if (selectedDates.length < 2) return;

          const startDate = Date.parse(selectedDates[0]);
          const endDate = Date.parse(selectedDates[1]) + 86400000;

          this.setState({ filterDates: [startDate, endDate] });
        },
      });
    }

    if (prevState.filterDates !== this.state.filterDates) {
      this.filter();
    }
  }

  filter = () => {
    const { orders } = this.props;
    const { filterDates } = this.state;
    let filteredOrders;

    filteredOrders = orders
      .filter((order) => {
        const controlDate = new Date(order.selectedDates[0]);

        return controlDate > filterDates[0] && controlDate < filterDates[1];
      })
      .sort(
        (a, b) => new Date(a.selectedDates[0]) - new Date(b.selectedDates[0])
      );

    this.setState({ filteredOrders });
  };

  render() {
    const { filteredOrders } = this.state;
    return (
      <div className="main-page">
        <div className="wrapper">
          <MainInfo orders={filteredOrders} />
          <Route path="/home/order/:id" component={OrderPage} />
        </div>
      </div>
    );
  }
}
