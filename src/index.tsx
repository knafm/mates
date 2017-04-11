import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Form from "./components/Form";
import Table from "./components/Table"
import {store} from "./store/index";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Form />
            <Table/>
        </div>
    </Provider>,
    document.getElementById("example")
);