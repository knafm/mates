import arrayToImmutable from "../libs/arrayToImmutable"
import {Map} from "immutable";
import * as actionTypes from "../constants/index";
import {Action} from "../interfaces/index";

const INITIAL_STATE = Map({});

export default function matesReducer(state = INITIAL_STATE, action: Action ){
    const {type, payload} = action;
    switch (type){
        case actionTypes.ADD_MATE:
            console.log(payload);
            return state.set(payload.guid,{...payload.info,guid:payload.guid});
        case actionTypes.DELETE_MATE:
            return state.delete(payload.guid);
        case actionTypes.LOAD_DATA:
            return state;
        case actionTypes.LOAD_DATA+actionTypes.SUCCESS:
            return (
                arrayToImmutable(payload.data)
            );
        default:
            return state;
    }
}