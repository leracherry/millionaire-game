import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer);

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}

store.dispatch({ type: "INIT_APPLICATION" });
reportWebVitals();
