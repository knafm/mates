/**
 * Created by KNA on 10.04.2017.
 */
import * as React from "react";
import {connect} from "react-redux";
import {loadData} from "../AC/index"

export interface FormProps {loadData: any  }


class Table extends React.Component<FormProps, undefined> {
    constructor(){
        super();
    }
    componentDidMount(){
        /**
         * Грузим начальные значения в store из api (из json который лежит в /api/mates.json)
         */
        this.props.loadData();
    }
    render() {
        return <h2>table</h2>;
    }
}

export default connect(null,{loadData})(Table)