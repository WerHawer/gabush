import React, { Component } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

export default class Counter extends Component {
  state = { counter: 0 };

  handleIncrement = (e) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
    this.props.onClick(e);
  };

  handleDecrement = (e) => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState((prevState) => {
        return { counter: prevState.counter - 1 };
      });
      this.props.onClick(e);
    }
  };

  handleChange = (e) => {
    this.setState({ counter: Number(e.target.value) });
    this.props.onClick(e);
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <Button
          type="button"
          name="counterIncrement"
          onClick={this.handleIncrement}
        >
          +
        </Button>

        <Input
          type="number"
          value={counter}
          name="mountInput"
          onChange={this.handleChange}
        />

        <Button
          type="button"
          name="counterDecrement"
          onClick={this.handleDecrement}
        >
          -
        </Button>
      </div>
    );
  }
}
