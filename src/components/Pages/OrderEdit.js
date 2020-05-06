import React, { Component } from "react";
import MenuList from "../MenuList/MenuList";
import * as localStorage from "../utils/localStorage";

export default class OrderEdit extends Component {
  state = {
    orderIsReady: false,
    order: {},
    orders: [],
    menu: [],
  };

  componentDidMount() {
    const { location, history } = this.props;
    if (!location.state) {
      history.push("/home");
    }
    const menuLS = localStorage.load("gabushMenu") || [];
    const ordersLS = localStorage.load("orders") || [];
    this.setState({ menu: menuLS, orders: ordersLS, order: location.state });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order } = this.state;

    if (prevState.order.dishes !== order.dishes) {
      this.handleRefreshOrder();
    }

    if (prevState.orders !== this.state.orders) {
      localStorage.save("orders", this.state.orders);
    }

    if (prevState.menu !== this.state.menu) {
      this.getActualMenu();
    }
  }

  getActualMenu = () => {
    const { order, menu } = this.state;

    order.dishes.forEach((dish) => {
      menu.forEach((el) => {
        if (dish.id === el.id) {
          el.mount = dish.mount;
          this.setState({ menu });
        }
      });
    });
  };

  handleRefreshOrder = () => {
    const { order } = this.state;
    this.setState((prevState) => {
      return {
        orders: [...prevState.orders.filter((el) => el.id !== order.id), order],
      };
    });
  };

  onDishClick = (e) => {
    const { menu } = this.state;

    if (e.target.name === "counterIncrement") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount += 1;
      this.setState({ menu });

      return;
    }

    if (e.target.name === "counterDecrement") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount -= 1;
      this.setState({ menu });

      return;
    }

    if (e.target.name === "mountInput") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount = Number(e.target.value);
      this.setState({ menu: [...menu] });

      return;
    }
  };

  handleSaveDishes = (dishes) => {
    const { order, orderIsReady } = this.state;

    if (orderIsReady) return;

    this.setState({ order: { ...order, dishes }, orderIsReady: true });
  };

  filter = (menu) => menu.filter((el) => el.mount > 0);

  orderIsReadyResset = () => {
    this.setState({ orderIsReady: false });
  };

  render() {
    const { order, orderIsReady, menu } = this.state;

    const filteredMenu = this.filter(menu);
    return (
      <div className="newOrder">
        <div className="wrapper">
          <MenuList
            notificationOk={this.orderIsReadyResset}
            orderIsReady={orderIsReady}
            onSaveClick={this.handleSaveDishes}
            order={order}
            menu={menu}
            filteredMenu={filteredMenu}
            onClick={this.onDishClick}
          />
        </div>
      </div>
    );
  }
}
