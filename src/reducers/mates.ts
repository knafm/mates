/**
 * Created by odd on 10.04.2017.
 */
import {fromJS} from "immutable";
import * as actionTypes from "../constants/index";

const INITIAL_STATE = fromJS([]);

export default function matesReducer(state = INITIAL_STATE, action= {type:'', payload:''} ){
    switch (action.type){
        case actionTypes.ADD_MATE:
            return state;
        default:
            return state;
    }
}