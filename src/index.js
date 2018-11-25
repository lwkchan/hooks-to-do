import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const initialToDos = [
  { id: 1, description: "milk the cow", done: false },
  { id: 2, description: "feed the birds", done: false },
  { id: 3, description: "shear the sheep", done: false },
  { id: 4, description: "sew the seeds", done: false },
  { id: 5, description: "bake the break", done: false }
];

ReactDOM.render(
  <App initialToDos={initialToDos} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
