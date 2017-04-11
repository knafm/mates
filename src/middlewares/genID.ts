import {Action} from "../interfaces/index";
import {ADD_MATE} from "../constants/index";
import Guid from "../libs/uuid"

export default (store: any) => (next: any) => (action: Action) => {
    if (action.payload.hasOwnProperty("genID")) {
        const tempID = Guid.newGuid();
        next({
            payload: {
                ...action.payload,
                guid: tempID.toString()
            },
            type: ADD_MATE
        });

    } else {
        next(action)
    }
}