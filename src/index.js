import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./resset.css";
import "flatpickr/dist/themes/material_red.css";
import "flatpickr/dist/plugins/confirmDate/confirmDate.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
