import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import history from "./history";
import {reducer as HomePageReducer} from "../features/HomePage/redux/reducer"
import {reducer as AuthReducer} from "../features/Auth/redux/reducer"
import {reducer as CrudReducer} from "./crud/reducer"

const reducerMap = {
    router: connectRouter(history),
    home: HomePageReducer,
    auth: AuthReducer,
    crud: CrudReducer,
};

export default combineReducers(reducerMap);
