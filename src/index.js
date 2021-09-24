import React from "react";
import ReactDOM from "react-dom";
import Resep from "./component/product"
import reportWebVitals from "./reportWebVitals";
import './component/product.css';

ReactDOM.render(
  <React.StrictMode>
    <Resep />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
