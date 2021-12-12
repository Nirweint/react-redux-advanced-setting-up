import {combineReducers, createStore} from "redux";
import { appReducer} from './reducer';

const rootReducers = combineReducers({
    app: appReducer
})

export type TAppState = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)