import React, { useEffect, useState, createRef } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import flatpickr from "flatpickr";
import shortid from "shortid";
import Inputmask from "inputmask";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Select from "../UI/Select";
import rooms from "../../data/rooms";
import * as localStorage from "../utils/localStorage";
import ConfirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";

const dateValidation = (date = [], room = 0) => {
  let error = "";
  const orders = localStorage.load("orders") || [];
  const dateIsExist = orders
    .filter((order) => order.room === room)
    .find((el) => Date.parse(el.selectedDates[0]) === Date.parse(date[0]));

  if (!date.length) {
    error = "Requaired";
  }

  if (new Date(date[0]) < Date.now()) {
    error = "Этa дата уже прошла";
  }

  if (dateIsExist) {
    error = "Заказ на это время в этом зале уже существует";
  }

  return error;
};

const numberValidation = (str) => {
  const numbers = str
    .split("")
    .reduce((counter, el) => (isNaN(el) ? counter : (counter += 1)), 0);

  return numbers !== 14;
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Requaired";
  }
  if (!values.tel) {
    errors.tel = "Requaired";
  } else if (numberValidation(values.tel)) {
    errors.tel = "Type full tel";
  }
  if (!values.guests) {
    errors.guests = "Requaired";
  }
  if (!values.comment) {
    errors.comment = "Requaired";
  }
  if (isNaN(values.room)) {
    errors.room = "rooomm";
  }

  return errors;
};

// _________________________________________________________

const NewOrderFormFormik = ({ onFormSubmit }) => {
  const telInput = createRef();
  const [date, setDate] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);
  const [isSubmitFalse, setIsSubmitFalse] = useState(false);

  useEffect(() => {
    flatpickr("#dataPicker", {
      enableTime: true,
      time_24hr: true,
      dateFormat: "d.m H:i",
      plugins: [
        new ConfirmDatePlugin({
          confirmText: "OK",
          theme: "light",
        }),
      ],
      onChange: (selectedDates, dateStr, instance) => {
        setDate(dateStr);
        setSelectedDates([...selectedDates]);
      },
    });

    Inputmask("+38 (099) 999-99-99").mask(telInput);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      tel: "",
      guests: "",
      room: "Выбирите зал",
      comment: "",
    },
    validate,
    onSubmit: (values) => {
      if (!date || dateValidation(selectedDates, values.room)) {
        setIsSubmitFalse(true);
        return;
      }
      onFormSubmit({ ...values, date, selectedDates, id: shortid.generate() });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="consumer-form">
      <Input
        customClass="consumer-form__input"
        type="text"
        id="date"
        name="date"
        id="dataPicker"
        placeholder="Дата мероприятия"
        value={date}
        onChange={formik.handleChange}
      />
      {dateValidation(selectedDates, formik.values.room) && isSubmitFalse && (
        <span>{dateValidation(selectedDates, formik.values.room)}</span>
      )}
      <Input
        customClass="consumer-form__input"
        type="text"
        id="name"
        name="name"
        value={formik.values.name}
        placeholder="Имя клиента"
        onChange={formik.handleChange}
      />
      {formik.errors.name && <span>{formik.errors.name}</span>}
      <Input
        customClass="consumer-form__input"
        reff={telInput}
        type="text"
        id="tel"
        name="tel"
        value={formik.values.tel}
        placeholder="Телефон клиента"
        onChange={formik.handleChange}
      />
      {formik.errors.tel && <span>{formik.errors.tel}</span>}
      <Select
        customClass="consumer-form__input"
        id="room"
        name="room"
        options={rooms}
        value={formik.values.room}
        onChange={formik.handleChange}
      />
      {formik.errors.room && <span>{formik.errors.room}</span>}
      <Input
        customClass="consumer-form__input"
        type="number"
        id="guests"
        name="guests"
        value={formik.values.guests}
        placeholder="Количество гостей"
        onChange={formik.handleChange}
      />
      {formik.errors.guests && <span>{formik.errors.guests}</span>}
      <Input
        customClass="consumer-form__input"
        type="text"
        name="comment"
        id="comment"
        value={formik.values.comment}
        placeholder="Комментарий"
        onChange={formik.handleChange}
      />
      {formik.errors.comment && <span>{formik.errors.comment}</span>}

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
};

export default NewOrderFormFormik;
