import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form";
import Table from "./components/Table"
import {mobx} from "./store/mobxStore";
import routes from "./routes";

// todo роутинг
ReactDOM.render(
    routes,
    document.getElementById("example")
);