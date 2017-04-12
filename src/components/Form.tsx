import * as React from "react";
import {connect} from "react-redux";
import {addMate} from "../AC/index"
import {ageCheck, nameCheck} from "../libs/valid";

export interface FormProps {
    addMate: (info: object, genID: boolean) => void,
    setState: (state: object) => void
}

export interface FormState {
    firstName: string,
    lastName: string,
    age: number,
    error: boolean,
}

class Form extends React.Component<FormProps, FormState> {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            error: false
        }
    }

    submitHandler = (ev: React.FormEvent<any>) => {
        ev.preventDefault();
        const {lastName, age, firstName} = this.state;
        if (nameCheck(lastName) && nameCheck(firstName) && ageCheck(age)) {
            this.props.addMate(this.state, true);
            this.setState({firstName: '',lastName: '',age: 0})
        } else {
            this.setState({error: true});
        }
    };

    handleChange = (field: any) => (ev: React.FormEvent<any>) => {
        this.setState({
            [field]: ev.currentTarget.value
        })
    };

    componentDidUpdate() {
        (this.state.error) ? setTimeout(this.setState.bind(this), 2000, {error: false}) : null;
    }

    render() {
        const error = (this.state.error) ? <div className="alert alert-danger">Форма не валидна</div> : null;
        return (
            <div className="col-lg-3">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control" id="firstName" placeholder="First Name"
                               onChange={this.handleChange('firstName').bind(this)} value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="lastName" placeholder="Last Name"
                               onChange={this.handleChange('lastName').bind(this)} value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="age"
                               onChange={this.handleChange('age').bind(this)} value={this.state.age}/>
                    </div>
                    <button type="submit" className="btn btn-default">Создать</button>
                </form>
                {error}
            </div>
        );
    }
}

export default connect(null, {addMate})(Form)
