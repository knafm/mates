/**
 * Created by KNA on 10.04.2017.
 */
import * as React from "react";
import {connect} from "react-redux";

export interface FormProps { }


class Form extends React.Component<FormProps, undefined> {
    render() {
        return <h1>form</h1>;
    }
}

export default connect()(Form)
