import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import configureStore from "./store/store";
import { Provider } from "react-redux";

const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

//API key - 32b927577cfe92215dd2a9bcd7c5b572
