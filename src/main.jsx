import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";
// import { BoxOfColor } from "./BoxOfColor";
// import { CounterApp } from "./CounterApp.";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    <FirstApp title="Hola, soy Miguel" subTitle={123} />
    {/* <CounterApp value={20} /> */}
    {/* <BoxOfColor /> */}
  </React.StrictMode>
);
