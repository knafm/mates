//todo тест, дальше через пропсы
import {observable, autorun, IObservableArray} from "mobx";

export interface IMate{
    guid: string;
    age: number;
    name : {
        first: string;
        last: string;
    };
    email?: string;
}

// todo описать интерфейс mobxStore ??
class mobxStore {
    @observable mates : IObservableArray<IMate> = observable.array([]);


}
export const mobx = new mobxStore();

// todo для проверки , убрать
autorun(()=>{
    console.log("autorun mates:");
    console.log(mobx.mates.forEach((item)=>console.log(item)));
    console.log("store");
    console.log(mobx)

});
