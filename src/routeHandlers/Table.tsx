import * as React from "react";
import Table from "../components/Table";
import {mobx} from "../store/mobxStore";

class TableHandler extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h2>Table:</h2>
                <Table mobxStore={mobx}/>
            </div>
        )
    }
}

export default TableHandler;
