import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Stateprovider } from "./StateHandler/Stateprovider";
import reducer, { initialState } from "./StateHandler/reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Stateprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
