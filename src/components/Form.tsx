/**
 * Created by KNA on 10.04.2017.
 */
import * as React from "react";
import {connect} from "react-redux";
import {addMate} from "../AC/index"

export interface FormProps {
    addMate: (info: object,genID:boolean) => void,
    setState: (state:object)=> void
}
export interface FormState {
    firstName: string,
    lastName: string,
    age: number
}

class Form extends React.Component<FormProps, FormState>  {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            age: 0
        }
    }

    submitHandler = (ev: React.FormEvent<any>) => {
        ev.preventDefault();
        this.props.addMate(this.state,true)
    };

    handleChange = (field : any) => (ev: React.FormEvent<any>) => {
        this.setState({
            [field]: ev.currentTarget.value
        })
    };

    render() {
        return (

            <div className="col-lg-3">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control" id="firstName" placeholder="First Name"
                               onChange={this.handleChange('firstName').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="lastName" placeholder="Last Name"
                               onChange={this.handleChange('lastName').bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="age"
                               onChange={this.handleChange('age').bind(this)}/>
                    </div>
                    <button type="submit" className="btn btn-default">Создать</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addMate})(Form)
