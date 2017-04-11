/**
 * Created by KNA on 10.04.2017.
 */
import * as React from "react";
import {connect} from "react-redux";
import {loadData} from "../AC/index"

export interface FormProps {
    loadData: () => void;
    state: any;
    matesByGuid: any;
}


class Table extends React.Component<FormProps, undefined> {
    constructor() {
        super();
    }

    componentDidMount() {
        /**
         * Грузим начальные значения в store из api (из json который лежит в /api/mates.json)
         */
        this.props.loadData();
    }

    render() {
        // console.log(this.props.matesByGuid);
        let Rows = [];
        const { matesByGuid } = this.props;
        let number=0;
        for(let key in matesByGuid){
            Rows.push(<tr key={matesByGuid[key].guid}>
                <td>{number++}</td>
                <td>{matesByGuid[key].name.first}</td>
                <td>{matesByGuid[key].name.last}</td>
                <td>{matesByGuid[key].age}</td>
                <td><a>Edit</a> <a>Delete</a></td>
            </tr>)
        }

        return (

            <div className="col-lg-6">
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
    , {loadData}
)(Table)