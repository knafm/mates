import {START, SUCCESS, FAIL}from "../constants";
import {Action} from "../interfaces/index"

export default (store: any) => (next: any) => (action: Action) => {
    const {payload} = action;
    if (payload.hasOwnProperty("callAPI")) {
        /**
         * здесть можно отправить action + START , это позволит отображать спиннер
         */
        fetch(payload.callAPI).then((res) => {
            res.text().then((data) => {
                //получили данные, передаем массив и action , дальше обрабатываем в редьюсере
                next({payload: {data: JSON.parse(data)}, type: action.type + SUCCESS})
            })
        }).catch((err) => {
            //ошибка, передаем , дальше можно складировать в лог , к примеру.
            //todo  Не обрабатывается action.type+FAIL
            next({payload: {err: err}, type: action.type + FAIL})
        });

    } else {
        next(action)
    }
}