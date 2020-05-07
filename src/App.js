import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NewOrder from "./components/Pages/NewOrder";
import menu from "./data/menu";
import * as localStorage from "./components/utils/localStorage";
import HomePage from "./components/Pages/HomePage";
import OrderEdit from "./components/Pages/OrderEdit";

export default class App extends Component {
  state = {};

  componentDidMount() {
    localStorage.save("gabushMenu", menu);
  }

  render() {
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/newOrder" component={NewOrder} />
        <Route path="/orderEdit" component={OrderEdit} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}
