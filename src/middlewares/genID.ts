import {Action} from "../interfaces/index";
import {ADD_MATE} from "../constants/index"

export default (store: any) => (next: any) => (action: Action) => {
    if (action.payload.hasOwnProperty("genID")) {
        const tempID = Date.now() + Math.random();
        next({payload: {...action.payload, guid: tempID.toString()}, action: ADD_MATE})
    } else {
        next(action)
    }
}