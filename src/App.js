import React, { Component } from "react";
import flatpickr from "flatpickr";
import MainInfo from "./components/MainInfo/MainInfo";

export default class App extends Component {
  state = { input: null, datePicker: null };

  componentDidMount() {
    this.setState({
      datePicker: flatpickr("#dataPicker", {
        mode: "range",
        inline: true,

        onChange: function (selectedDates, dateStr, instance) {
          //отправка запроса с выбранной датой. Фильтровать по выбору только одной даты.
        },
      }),
    });

    this.setState({ input: document.querySelector("#dataPicker") });
  }

  handleDateChange = (str) => {
    this.setState({ dateValue: str });
  };

  render() {
    // const { dateValue } = this.state;

    // console.log(this.state.datePicker);
    return (
      <>
        <MainInfo />
      </>
    );
  }
}
