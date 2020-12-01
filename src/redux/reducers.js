import { combineReducers } from "redux";
import commonReducers from "./reducers/index";

const appReducer = combineReducers({
    commonReducers
});

const rootReducer = (_state, action) => {
    let state = _state;
    return appReducer(state, action);
};

export default rootReducer;