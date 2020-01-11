import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./features/App";
import "./assets/styles/index.scss";
import configureStore from "./features/shared/redux/store";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore(null);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);
