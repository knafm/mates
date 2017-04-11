/**
 * Created by KNA on 10.04.2017.
 */
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers/index";
import api from "../middlewares/api";
import genID from "../middlewares/genID";

const middlewares = applyMiddleware(genID,api);
export const store = createStore(rootReducer, middlewares);

//todo  убрать после отладки.
// window.store = store;