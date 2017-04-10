import {Map} from "immutable";

export default function arrayToImmutable(arr: any){
    console.log(typeof arr);
    return arr.reduce((acc: any,mate: any)=>{
        return acc.set(mate.guid, mate)
    },Map({}))

}
