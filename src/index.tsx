import * as React from "react";
import * as ReactDOM from "react-dom";
import Form from "./components/Form";
import Table from "./components/Table"
import {mobx} from "./store/mobxStore";

// todo роутинг
ReactDOM.render(
    <div>
        <Form mobxStore={mobx}/>
        <Table mobxStore={mobx}/>
    </div>,
    document.getElementById("example")
);