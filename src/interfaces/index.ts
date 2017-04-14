/**
 * Просто расписал подробно Action
 */
export interface Action {
    payload: {
        guid?: string;
        data?: object;
        info?: object;
        callAPI?: string;
        genID?: boolean;
    }
    type:string;
}

//todo расписать в каком виде у нас хранятся mates
export interface Imates {

}

