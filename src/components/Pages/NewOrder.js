import React, { Component } from "react";
import MenuList from "../MenuList/MenuList";
import NewOrderForm from "../NewOrderForm/NewOrderForm";
import NewOrderFormFormik from "../NewOrderForm/NewOrderFormFormik";

// const dateInput = createRef();
// const telInput = createRef();

export default class NewOrder extends Component {
  state = {
    orderIsReady: false,
    isPrevInfoSave: false,
    dateInput: null,
    date: "",
    name: "",
    tel: "",
    guests: "",
    room: 1,
    comment: "",
    selectedDates: [],
    order: {},
  };

  // componentDidMount() {
  //   flatpickr("#dataPicker", {
  //     enableTime: true,
  //     time_24hr: true,
  //     dateFormat: "d.m H:i",
  //     onChange: (selectedDates, dateStr, instance) => {
  //       this.setState({ selectedDates });
  //     },
  //   });

  //   this.setState({ dateInput: dateInput.current });

  //   Inputmask("+38 (099) 999-99-99").mask(telInput);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { onAddNewOrder } = this.props;
    const { order } = this.state;
    if (prevState.order.dishes !== order.dishes) {
      onAddNewOrder(order);
    }
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

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
              {/* <NewOrderForm onFormSubmit={this.handlePrevInfoSubmit} /> */}
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
