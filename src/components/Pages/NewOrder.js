import React, { Component, createRef } from "react";
// import { Link } from "react-router-dom";
import flatpickr from "flatpickr";
import shortid from "shortid";
import Input from "../UI/Input";
import Button from "../UI/Button";
import MenuList from "../MenuList/MenuList";
// import menu from "../../data/menu";

const dateInput = createRef();

export default class NewOrder extends Component {
  state = {
    isPrevInfoSave: false,
    dateInput: null,
    date: "",
    name: "",
    room: "",
    comment: "",
    order: {
      id: "",
      date: "",
      name: "",
      room: "",
      comment: "",
      dishes: [],
    },
  };

  componentDidMount() {
    flatpickr("#dataPicker", {
      enableTime: true,
      time_24hr: true,
      dateFormat: "d.m.Y H:i",
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
    const { name, room, comment, order } = this.state;
    this.setState({
      date: this.state.dateInput.value,
      order: {
        ...order,
        id: shortid.generate(),
        name,
        room,
        comment,
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
      console.log(choosen);
      console.log(menu);
      return;
    }

    if (e.target.name === "counterDecrement") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount -= 1;
      this.setState({ menu: [...menu, choosen] });
      console.log(choosen);
      console.log(menu);
      return;
    }

    if (e.target.name === "mountInput") {
      const card = e.target.closest("li");

      const choosen = menu.find((el) => card.id === String(el.id));
      choosen.mount = Number(e.target.value);
      this.setState({ menu: [...menu, choosen] });
      console.log(choosen);
      console.log(menu);
      return;
    }
  };

  handleSaveDishes = (dishes) => {
    const { order } = this.state;

    this.setState({ order: { ...order, dishes } });
  };

  filter = (menu) => menu.filter((el) => el.mount > 0);

  render() {
    const { name, room, comment, isPrevInfoSave, order } = this.state;
    const { menu } = this.props;

    const filteredMenu = this.filter(menu);
    return (
      <div className="wrapper">
        {!isPrevInfoSave && (
          <form onSubmit={this.handleSubmit}>
            <Input
              reff={dateInput}
              type="text"
              name="date"
              id="dataPicker"
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="room"
              value={room}
              onChange={this.handleChange}
            />
            <Input
              type="text"
              name="comment"
              value={comment}
              onChange={this.handleChange}
            />
            <Button type="submit">Save</Button>
          </form>
        )}

        {isPrevInfoSave && (
          <MenuList
            onSaveClick={this.handleSaveDishes}
            order={order}
            menu={menu}
            filteredMenu={filteredMenu}
            onClick={this.onDishClick}
          />
        )}
      </div>
    );
  }
}
