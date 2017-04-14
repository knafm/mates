import * as React from "react";
import {ageCheck, nameCheck} from "../libs/valid";
import {IObservableArray} from "mobx";
import {IMate} from "../store/mobxStore";
import {observer} from "mobx-react"

export interface FormProps {
    mobxStore: {
        mates: IObservableArray<IMate>;
    };
}

export interface FormState {
    editing?: string;
    firstName?: string;
    lastName?: string;
    age?: number;
    error?: boolean;
}

@observer
class Table extends React.Component<FormProps, FormState> {
    constructor() {
        super();
        this.state = {
            editing: "",
            firstName: "",
            lastName: "",
            age: 0,
            error: false
        }
    }

    handleDelete = (index: number) => (ev: React.FormEvent<HTMLInputElement>) => {
        ev.preventDefault();
        this.props.mobxStore.mates.splice(index, 1);
    };
    handleEdit = (guid: string, firstName: string, lastName: string, age: number) => (ev: React.FormEvent<HTMLInputElement>) => {
        ev.preventDefault();
        console.log(lastName);
        console.log(age);

        this.setState({
            editing: guid,
            firstName: firstName,
            lastName: lastName,
            age: age
        });
    };
    handleEditCommit = (index: number) => (ev: React.FormEvent<HTMLInputElement>) => {
        ev.preventDefault();
        const {firstName, lastName, age} = this.state;
        const {mates} = this.props.mobxStore;
        if (nameCheck(lastName) && nameCheck(firstName) && ageCheck(age)) {
            mates[index] = {
                age: age,
                name: {
                    first: firstName,
                    last: lastName
                },
                guid: mates[index].guid
            };
            this.setState({
                error: false,
                editing: "",
                firstName: "",
                lastName: "",
                age: 0
            });
        } else {
            this.setState({error: true});
        }

    };
    handleChange = (field: string) => (ev: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            [field]: ev.currentTarget.value
        });

    };

    componentDidMount() {
        /**
         * Грузим начальные значения в store из api (из json который лежит в /api/mates.json)
         */
        // this.props.loadData();
    }

    render() {
        const error = (this.state.error) ? <div className="alert alert-danger">Форма не валидна</div> : null;
        let Rows: object[] = [];
        const {mates} = this.props.mobxStore;
        mates.forEach((item: IMate, i) => {
            if (item.guid !== this.state.editing) {
                Rows.push(
                    <tr key={item.guid}>
                        <td>{i}</td>
                        <td>{item.name.first}</td>
                        <td>{item.name.last}</td>
                        <td>{item.age}</td>
                        <td>
                            <a onClick={this.handleEdit(item.guid, item.name.first, item.name.last, item.age)
                                .bind(this)}>Edit </a>
                            <a onClick={this.handleDelete(i).bind(this)}>Delete</a>
                        </td>
                    </tr>
                )
            } else {
                Rows.push(
                    <tr key={item.guid}>
                        <td>{i}</td>
                        <td>
                            <input className="form-control" id="firstName" value={this.state.firstName}
                                   onChange={this.handleChange("firstName").bind(this)}/>
                        </td>
                        <td>
                            <input className="form-control" id="lastName" value={this.state.lastName}
                                   onChange={this.handleChange("lastName").bind(this)}/>
                        </td>

                        <td>
                            <input type="number" className="form-control" id="age" value={this.state.age.toString()}
                                   onChange={this.handleChange("age").bind(this)}/>
                        </td>
                        <td>
                            <a onClick={this.handleEditCommit(i).bind(this)}>Commit</a>
                        </td>
                    </tr>
                )
            }
        });


        return (

            <div className="col-lg-7">
                {error}
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table