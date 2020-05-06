import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import flatpickr from "flatpickr";
import MainInfo from "../MainInfo/MainInfo";
import OrderPage from "../Pages/OrderPage";
import IngridientsSumm from "./IngridientsSumm";
import * as localStorage from "../utils/localStorage";

export default class HomePage extends Component {
  state = {
    input: null,
    filteredOrders: [],
    filterDates: [],
    dateStr: "",
    ingridients: {},
    orders: [],
  };

  componentDidMount() {
    const ordersLS = localStorage.load("orders") || [];
    this.setState({
      input: document.querySelector("#dataPicker"),
      orders: ordersLS,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      flatpickr("#dataPicker", {
        mode: "range",
        inline: true,
        dateFormat: "d.m.Y",
        onReady: (selectedDates, dateStr, instance) => {
          const pad = (str) => str.padStart(2, "0");
          const Y = instance.now.getFullYear();
          const D = pad(String(instance.now.getDate()));
          const MO = pad(String(instance.now.getMonth() + 1));
          const H = instance.now.getHours();
          const M = instance.now.getMinutes();
          const ms = (H * 60 + M) * 60 * 1000;

          const startDate = Date.now() - ms;
          const endDate = startDate + 86400000;

          this.setState({
            filterDates: [startDate, endDate],
            dateStr: `${D}.${MO}.${Y}`,
          });
        },
        onChange: (selectedDates, dateStr, instance) => {
          if (selectedDates.length < 2) return;

          const startDate = Date.parse(selectedDates[0]);
          const endDate = Date.parse(selectedDates[1]) + 86400000;

          this.setState({ filterDates: [startDate, endDate], dateStr });
        },
      });
    }

    if (prevState.filterDates !== this.state.filterDates) {
      this.filter();
    }

    if (prevState.filteredOrders !== this.state.filteredOrders) {
      this.getIngr();
    }
  }

  getIngr = () => {
    const { filteredOrders } = this.state;

    const allIngr = filteredOrders.reduce((all, order) => {
      const ingrFromOneOrder = order.dishes.reduce(
        (ingr, dish) => [...ingr, ...Object.keys(dish.ingridients)],
        []
      );
      return [...all, ...ingrFromOneOrder];
    }, []);

    const unickIngr = allIngr.reduce(
      (unick, ingr) => (unick.includes(ingr) ? unick : [...unick, ingr]),
      []
    );
    this.getSummOfIngr(unickIngr);
  };

  getSummOfIngr = (unickIngr) => {
    const { filteredOrders } = this.state;

    let resultObj = {};

    unickIngr.forEach((ingr) => {
      filteredOrders.forEach(({ dishes }) => {
        dishes.forEach(({ ingridients }) => {
          if (ingridients[ingr]) {
            if (resultObj[ingr]) {
              resultObj = {
                ...resultObj,
                [ingr]: ingridients[ingr] + resultObj[ingr],
              };
            } else {
              resultObj = {
                ...resultObj,
                [ingr]: ingridients[ingr],
              };
            }
          }
        });
      });
    });

    this.setState({ ingridients: resultObj });
  };

  filter = () => {
    const { filterDates, orders } = this.state;
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
    const { filteredOrders, dateStr, ingridients } = this.state;
    return (
      <div className="main-page">
        <div className="wrapper">
          <MainInfo orders={filteredOrders} />
          <Switch>
            <Route path="/home/order/:id" component={OrderPage} />
            <Route
              path="/home/orderIngridients"
              render={(props) => (
                <IngridientsSumm
                  {...props}
                  date={dateStr}
                  ingridients={ingridients}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
