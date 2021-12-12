import {App as Component} from './App'
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {SetAge, IAction} from "./state/actions";
import {TAppState} from "./state/store";

const mapStateToProps = (state: TAppState) => {
    return {
        age: state.app.age
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        onClick: () => dispatch(SetAge(Math.floor(Math.random() * 100)))
    }
}

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(Component)