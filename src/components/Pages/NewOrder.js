import React, { Component } from "react";
import MenuList from "../MenuList/MenuList";

import NewOrderFormFormik from "../NewOrderForm/NewOrderFormFormik";

export default class NewOrder extends Component {
  state = {
    orderIsReady: false,
    isPrevInfoSave: false,
    order: {},
  };

  componentDidUpdate(prevProps, prevState) {
    const { onAddNewOrder } = this.props;
    const { order } = this.state;
    if (prevState.order.dishes !== order.dishes) {
      onAddNewOrder(order);
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

  onDishClick = (e) => {
    const { menu } = this.props;

    if (e.target.name === "counterIncrement") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount += 1;
      this.setState({ menu: [...menu, choosen] });

      return;
    }

    if (e.target.name === "counterDecrement") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount -= 1;
      this.setState({ menu: [...menu, choosen] });

      return;
    }

    if (e.target.name === "mountInput") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount = Number(e.target.value);
      this.setState({ menu: [...menu, choosen] });

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
    const { isPrevInfoSave, order, orderIsReady } = this.state;
    const { menu, ressetMenu } = this.props;

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
            <MenuList
              ressetMenu={ressetMenu}
              notificationOk={this.orderIsReadyResset}
              orderIsReady={orderIsReady}
              onSaveClick={this.handleSaveDishes}
              order={order}
              menu={menu}
              filteredMenu={filteredMenu}
              onClick={this.onDishClick}
            />
          )}
        </div>
      </div>
    );
  }
}
