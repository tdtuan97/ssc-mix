import {combineReducers}            from "redux";
import {connectRouter}              from "connected-react-router";
import {reducer as HomePageReducer} from "../features/HomePage/redux/reducer"
import history                      from "./history";

const reducerMap = {
    router: connectRouter(history),
    home: HomePageReducer,
};

export default combineReducers(reducerMap);
