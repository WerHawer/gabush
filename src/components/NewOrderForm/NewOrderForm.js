import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import flatpickr from "flatpickr";
import shortid from "shortid";
import Inputmask from "inputmask";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
import rooms from "../../data/rooms";

const telInput = createRef();

export default class NewOrderForm extends Component {
  state = {
    date: "",
    name: "",
    tel: "",
    guests: "",
    room: 1,
    comment: "",
    selectedDates: [],
  };

  componentDidMount() {
    flatpickr("#dataPicker", {
      enableTime: true,
      time_24hr: true,
      dateFormat: "d.m H:i",
      onChange: (selectedDates, dateStr, instance) => {
        this.setState({ selectedDates });
        this.setState({ date: dateStr });
      },
    });

    Inputmask("+38 (099) 999-99-99").mask(telInput);
  }

  handleSubmit = (e) => {
    const { onFormSubmit } = this.props;
    e.preventDefault();
    onFormSubmit({ ...this.state, id: shortid.generate() });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, tel, room, comment, guests } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="consumer-form">
        <Input
          customClass="consumer-form__input"
          type="text"
          name="date"
          id="dataPicker"
          placeholder="Дата мероприятия"
          onChange={this.handleChange}
        />
        <Input
          customClass="consumer-form__input"
          type="text"
          name="name"
          value={name}
          placeholder="Имя клиента"
          onChange={this.handleChange}
        />
        <Input
          customClass="consumer-form__input"
          reff={telInput}
          type="text"
          name="tel"
          value={tel}
          placeholder="Телефон клиента"
          onChange={this.handleChange}
        />
        <Select
          customClass="consumer-form__input"
          name="room"
          options={rooms}
          value={room}
          placeholder="Зал заказа"
          onChange={this.handleChange}
        />
        <Input
          customClass="consumer-form__input"
          type="number"
          name="guests"
          value={guests}
          placeholder="Количество гостей"
          onChange={this.handleChange}
        />
        <Input
          customClass="consumer-form__input"
          type="text"
          name="comment"
          value={comment}
          placeholder="Комментарий"
          onChange={this.handleChange}
        />

        <div className="newOrder__btn-container">
          <Link to="/home">
            <Button type="button" className=" saveConsumerBtn">
              Главная
            </Button>
          </Link>

          <Button type="submit" customClass="saveConsumerBtn">
            Дальше
          </Button>
        </div>
      </form>
    );
  }
}
