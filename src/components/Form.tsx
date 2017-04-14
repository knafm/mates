import * as React from "react";
import {observer} from "mobx-react";
import Guid from "../libs/uuid";
import {IObservableArray} from "mobx";
import {IMate} from "../store/mobxStore";
import {ageCheck, nameCheck} from "../libs/valid";

export interface FormProps {
    mobxStore: {
        mates: IObservableArray<IMate>;
    };
}

export interface FormState {
    firstName?: string;
    lastName?: string;
    age?: number;
    error?: boolean;

}


@observer
class Form extends React.Component<FormProps, FormState> {
    constructor(props: FormProps) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            error: false,
        };


    }

    submitHandler = (ev: React.FormEvent<HTMLInputElement>) => {
        ev.preventDefault();
        let {mates} = this.props.mobxStore;
        const {lastName, age, firstName} = this.state;
        if (nameCheck(lastName) && nameCheck(firstName) && ageCheck(age)) {
            mates.push({
                age: age,
                name: {
                    first: firstName,
                    last: lastName
                },
                guid: Guid.newGuid()

            });
            this.setState({
                error: false,
                firstName: "",
                lastName: "",
                age: 0,
            })
        } else {
            this.setState({error: true})
        }
    };

    handleChange = (field: string) => (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            [field]: ev.currentTarget.value
        })
    };


    render() {
        const error = (this.state.error) ? <div className="alert alert-danger">Форма не валидна</div> : null;
        return (
            <div className="col-lg-3">
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input className="form-control" id="firstName" placeholder="First Name"
                               onChange={this.handleChange("firstName").bind(this)} value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input className="form-control" id="lastName" placeholder="Last Name"
                               onChange={this.handleChange("lastName").bind(this)} value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" className="form-control" id="age" placeholder="age"
                               onChange={this.handleChange("age").bind(this)} value={this.state.age}/>
                    </div>
                    <button type="submit" className="btn btn-default">Создать</button>
                </form>
                {error}
            </div>
        );
    }
}

export default Form
