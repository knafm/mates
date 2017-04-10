/**
 * Created by KNA on 10.04.2017.
 */
import {createStore} from 'redux';
import {rootReducer} from "../reducers/index";

export const store = createStore(rootReducer);
