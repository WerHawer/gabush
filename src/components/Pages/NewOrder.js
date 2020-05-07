import React, { Component } from "react";
import MenuList from "../MenuList/MenuList";
import NewOrderFormFormik from "../NewOrderForm/NewOrderFormFormik";
import * as localStorage from "../utils/localStorage";
import OrderList from "../MenuList/OrderList";

export default class NewOrder extends Component {
  state = {
    orderIsReady: false,
    isPrevInfoSave: false,
    order: {},
    orders: [],
    menu: [],
  };

  componentDidMount() {
    const menuLS = localStorage.load("gabushMenu") || [];
    const ordersLS = localStorage.load("orders") || [];

    this.setState({ menu: menuLS, orders: ordersLS });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order } = this.state;

    if (prevState.order.dishes !== order.dishes) {
      this.handleAddNewOrder(order);
    }

    if (prevState.orders !== this.state.orders) {
      localStorage.save("orders", this.state.orders);
    }
  }

  handlePrevInfoSubmit = (obj) => {
    this.setState({
      order: {
        ...obj,
      },
      isPrevInfoSave: true,
    });
  };

  handleAddNewOrder = (newOrder) => {
    const { orders } = this.state;
    this.setState({ orders: [...orders, newOrder] });
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

  onDeleteDishFromList = (e) => {
    const { menu } = this.state;
    const card = e.target.closest("li");

    const choosen = menu.find((el) => card.id === String(el.id));
    choosen.mount = 0;
    this.setState({ menu });
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
    const { isPrevInfoSave, order, orderIsReady, menu } = this.state;

    const filteredMenu = this.filter(menu);
    return (
      <div className="newOrder">
        <div className="wrapper">
          {!isPrevInfoSave && (
            <>
              <NewOrderFormFormik onFormSubmit={this.handlePrevInfoSubmit} />
            </>
          )}

          {isPrevInfoSave && (
            <>
              <MenuList
                notificationOk={this.orderIsReadyResset}
                orderIsReady={orderIsReady}
                onSaveClick={this.handleSaveDishes}
                order={order}
                menu={menu}
                filteredMenu={filteredMenu}
                onClick={this.onDishClick}
              />
              <OrderList
                menu={filteredMenu}
                order={order}
                onDelClick={this.onDeleteDishFromList}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}
