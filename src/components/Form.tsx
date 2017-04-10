/**
 * Created by KNA on 10.04.2017.
 */
import * as React from "react";

export interface FormProps { }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Form extends React.Component<FormProps, undefined> {
    render() {
        return <h1>form</h1>;
    }
}