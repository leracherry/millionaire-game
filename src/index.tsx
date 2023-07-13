import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer);

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter basename="/millionaire-game">
          <App />
        </HashRouter>
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}

store.dispatch({ type: "INIT_APPLICATION" });
reportWebVitals();
