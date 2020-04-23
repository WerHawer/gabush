import React, { Component } from "react";
import MainInfo from "./components/MainInfo/MainInfo";
import { Switch, Route, Redirect } from "react-router-dom";
import NewOrder from "./components/Pages/NewOrder";

export default class App extends Component {
  handleDateChange = (str) => {
    this.setState({ dateValue: str });
  };

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={MainInfo} />
          <Route path="/newOrder" component={NewOrder} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}
