import {AppEvents} from "../events";
import {IAction} from "./actions";

const initState: TState = {
    name: "",
    age: 123,
}

export type TState = {
    name: string
    age: number
}

export const appReducer = (state: TState = initState, action: IAction): TState => {
    switch (action.type) {
        case AppEvents.SET_AGE:
            return {...state, age: action.payload}
        case AppEvents.SET_NAME:
            return {...state, name: action.payload}
        default:
            return state
    }
}