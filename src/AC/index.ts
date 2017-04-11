import {LOAD_DATA,DELETE_MATE, ADD_MATE} from "../constants/index";
import {Action} from "../interfaces/index";

export function loadData():Action {
    return {
        type: LOAD_DATA,
        payload: {
            callAPI: '/api/mates.json'
        }
    }
}
export function deleteMate(guid: string):{type: string ,payload: object} {
    return {
        type: DELETE_MATE,
        payload: {
            guid: guid
        }
    }
}
export function addMate(info: any,genID:boolean ):{type: string ,payload: object} {
    return {
        type: ADD_MATE,
        payload: {
            genID,
            info:{
                name: {
                    first: info.firstName,
                    last : info.lastName
                },
                age: info.age
            }


        }
    }
}