import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers/index";
import api from "../middlewares/api";
import genID from "../middlewares/genID";

const middlewares = applyMiddleware(genID,api);
export const store = createStore(rootReducer, middlewares);
