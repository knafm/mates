import * as React from "react";
import {connect} from "react-redux";
import {loadData} from "../AC/index";
import {deleteMate} from "../AC/index";
import {editMate} from "../AC/index";
import {ageCheck,nameCheck} from "../libs/valid";

export interface FormProps {
    loadData: () => void;
    state: any;
    matesByGuid: any;
    handleDelete: (guid: string) => void;
    deleteMate: (guid: string) => void;
    editMate: (guid: string,firstName: string,lastName:string,age: number) => void;
}

export interface FormState {
    editing: string;
    firstName: string;
    lastName:string;
    age: number;
    error: boolean;
}

class Table extends React.Component<FormProps, FormState> {
    constructor() {
        super();
        this.state = {
            editing: "",
            firstName: "",
            lastName:"",
            age:0,
            error:false
        }
    }

    handleDelete = (guid: string) => (ev: React.FormEvent<any>) => {
        ev.preventDefault();
        this.props.deleteMate(guid);
    };
    handleEdit = (guid: string) => (ev: React.FormEvent<any>) => {
        ev.preventDefault();
        this.setState({editing: guid});
    };
    handleEditCommit = (guid: string) => (ev: React.FormEvent<any>) => {
        ev.preventDefault();
        const {firstName,lastName,age} = this.state;
        (nameCheck(lastName)&&nameCheck(firstName)&&ageCheck(age))?
            this.props.editMate(guid,firstName,lastName,age) : this.setState({error:true});
        this.setState({
            editing: "",
            firstName: "",
            lastName:"",
            age:0
        });
    };
    handleChange = (field: any) => (ev: React.FormEvent<any>) => {
        this.setState({
            [field]: ev.currentTarget.value
        });

    };
    componentDidUpdate(){
        (this.state.error)? setTimeout(this.setState.bind(this),2000,{error:false}):null;
    }
    componentDidMount() {
        /**
         * Грузим начальные значения в store из api (из json который лежит в /api/mates.json)
         */
        this.props.loadData();
    }

    render() {
        const error = (this.state.error)? <div className="alert alert-danger">Форма не валидна</div> : null;
        let Rows = [];
        const {matesByGuid} = this.props;
        let number = 0;
        for (let key in matesByGuid) {
            if (key !== this.state.editing) {
                Rows.push(
                    <tr key={matesByGuid[key].guid}>
                        <td>{number++}</td>
                        <td>{matesByGuid[key].name.first}</td>
                        <td>{matesByGuid[key].name.last}</td>
                        <td>{matesByGuid[key].age}</td>
                        <td>
                            <a onClick={this.handleEdit(matesByGuid[key].guid).bind(this)}>Edit </a>
                            <a onClick={this.handleDelete(matesByGuid[key].guid).bind(this)}>Delete</a>
                        </td>
                    </tr>
                )
            } else {
                Rows.push(
                    <tr key={matesByGuid[key].guid}>
                        <td>{number++}</td>
                        <td>
                            <input className="form-control" id="firstName" placeholder={matesByGuid[key].name.first}
                                   onChange={this.handleChange('firstName').bind(this)}/>
                        </td>
                        <td>
                            <input className="form-control" id="lastName" placeholder={matesByGuid[key].name.last}
                                   onChange={this.handleChange('lastName').bind(this)}/>
                        </td>

                        <td>
                            <input type="number" className="form-control" id="age" placeholder={matesByGuid[key].age}
                                   onChange={this.handleChange('age').bind(this)}/>
                        </td>
                        <td>
                            <a onClick={this.handleEditCommit(matesByGuid[key].guid).bind(this)}>Commit</a>
                        </td>
                    </tr>
                )
            }

        }

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

export default connect((state) => {
        return {matesByGuid: state.matesReducer.toJS()}
    }
    , {loadData, deleteMate, editMate}
)(Table)