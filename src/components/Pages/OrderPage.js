import React, { Component } from "react";
import * as localStorage from "../utils/localStorage";
import ConsumerInfo from "../OneOrder/ConsumerInfo";
import MenuInfo from "../OneOrder/MenuInfo";
import OneOrderMenuHeader from "../OneOrder/OneOrderMenuHeader";

export default class OrderPage extends Component {
  state = { order: [] };

  componentDidMount() {
    this.getOrdersFromLS();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.url !== this.props.match.url) {
      this.getOrdersFromLS();
    }
  }
  getOrdersFromLS = () => {
    const { match } = this.props;
    const ordersLS = localStorage.load("orders");

    if (ordersLS) {
      const OpenedOrder = ordersLS.find(
        (order) => order.id === match.params.id
      );

      this.setState({ order: OpenedOrder });
    }
  };
  render() {
    const { order } = this.state;
    return (
      <div className="order-wrapper">
        <ConsumerInfo order={order} />
        <OneOrderMenuHeader />
        {order && <MenuInfo dishes={order.dishes} />}
      </div>
    );
  }
}
