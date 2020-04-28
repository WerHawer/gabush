import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NewOrder from "./components/Pages/NewOrder";
import menu from "./data/menu";
import * as localStorage from "./components/utils/localStorage";
import HomePage from "./components/Pages/HomePage";

export default class App extends Component {
  state = { menu: [], orders: [] };

  componentDidMount() {
    this.setState({ menu: [...menu] });

    const ordersLS = localStorage.load("orders");

    if (ordersLS) {
      this.setState({ orders: ordersLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.orders !== this.state.orders) {
      localStorage.save("orders", this.state.orders);
    }
  }

  handleAddNewOrder = (newOrder) => {
    const { orders } = this.state;
    this.setState({ orders: [...orders, newOrder] });
  };

  menuMountResset = () => {
    const { menu } = this.state;

    const ressetMenu = menu.map((el) => ({ ...el, mount: 0 }));

    this.setState({ menu: ressetMenu });
  };

  render() {
    const { menu, orders } = this.state;
    return (
      <>
        <Switch>
          <Route
            path="/home"
            render={(props) => <HomePage {...props} orders={orders} />}
          />
          <Route
            path="/newOrder"
            render={(props) => (
              <NewOrder
                {...props}
                menu={menu}
                ressetMenu={this.menuMountResset}
                onAddNewOrder={this.handleAddNewOrder}
              />
            )}
          />
          />
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
}
