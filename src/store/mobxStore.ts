import {observable, autorun, IObservableArray} from "mobx";

export interface IMate {
    guid: string;
    age: number;
    name: {
        first: string;
        last: string;
    };
    email?: string;
}

class mobxStore {
    constructor(url: string) {
        fetch(url).then((res) => {
            res.text().then((data) => {
                let res: IMate[] = JSON.parse(data);
                this.mates = observable.array(res)
                ;
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    @observable mates: IObservableArray<IMate> = observable.array([]);


}
export const mobx = new mobxStore('/api/mates.json');


// todo для проверки , убрать
autorun(() => {
    console.log("autorun mates:");
    console.log(mobx.mates.forEach((item) => console.log(item)));
    console.log("store");
    console.log(mobx)

});
