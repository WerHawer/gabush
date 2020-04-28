import React, { Component, createRef } from "react";
import flatpickr from "flatpickr";
import shortid from "shortid";
import Input from "../UI/Input";
import Button from "../UI/Button";
import MenuList from "../MenuList/MenuList";

const dateInput = createRef();

export default class NewOrder extends Component {
  state = {
    orderIsReady: false,
    isPrevInfoSave: false,
    dateInput: null,
    date: "",
    name: "",
    tel: "",
    guests: "",
    room: "",
    comment: "",
    selectedDates: [],
    order: {
      id: "",
      date: "",
      name: "",
      tel: "",
      guests: "",
      room: "",
      comment: "",
      selectedDates: [],
      dishes: [],
    },
  };

  componentDidMount() {
    flatpickr("#dataPicker", {
      enableTime: true,
      time_24hr: true,
      dateFormat: "d.m H:i",
      onChange: (selectedDates, dateStr, instance) => {
        this.setState({ selectedDates });
      },
    });

    this.setState({ dateInput: dateInput.current });
  }

  componentDidUpdate(prevProps, prevState) {
    const { onAddNewOrder } = this.props;
    const { order } = this.state;
    if (prevState.order.dishes !== order.dishes) {
      console.log("up");
      onAddNewOrder(order);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      tel,
      guests,
      room,
      comment,
      order,
      selectedDates,
    } = this.state;
    this.setState({
      date: this.state.dateInput.value,
      order: {
        ...order,
        id: shortid.generate(),
        name,
        tel,
        guests,
        room,
        comment,
        selectedDates,
        date: this.state.dateInput.value,
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
    const { order } = this.state;

    this.setState({ order: { ...order, dishes }, orderIsReady: true });
  };

  filter = (menu) => menu.filter((el) => el.mount > 0);

  orderIsReadyResset = () => {
    this.setState({ orderIsReady: false });
  };

  render() {
    const {
      name,
      tel,
      room,
      comment,
      isPrevInfoSave,
      order,
      orderIsReady,
      guests,
    } = this.state;
    const { menu } = this.props;

    const filteredMenu = this.filter(menu);
    return (
      <div className="newOrder">
        <div className="wrapper">
          {!isPrevInfoSave && (
            <form onSubmit={this.handleSubmit} className="consumer-form">
              <Input
                reff={dateInput}
                type="text"
                name="date"
                id="dataPicker"
                placeholder="Дата мероприятия"
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Имя клиента"
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name="tel"
                value={tel}
                placeholder="Телефон клиента"
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name="room"
                value={room}
                placeholder="Зал заказа"
                onChange={this.handleChange}
              />
              <Input
                type="number"
                name="guests"
                value={guests}
                placeholder="Количество гостей"
                onChange={this.handleChange}
              />
              <Input
                type="text"
                name="comment"
                value={comment}
                placeholder="Комментарий"
                onChange={this.handleChange}
              />

              <Button type="submit" customClass="saveConsumerBtn">
                Save
              </Button>
            </form>
          )}

          {isPrevInfoSave && (
            <MenuList
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
