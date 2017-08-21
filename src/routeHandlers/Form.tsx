import * as React from "react";
import Form from "../components/Form";
import {mobx} from "../store/mobxStore";

const FormHandler = () =>{
        return (
            <div>
                <h2>Form:</h2>
                <Form mobxStore={mobx}/>
            </div>
        )
};

export default FormHandler;