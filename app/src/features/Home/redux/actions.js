import {get} from "../../../common/crud"
import {FETCH_USERS, FETCH_USERS_PENDING} from "./constants";

const env = require("../../../config/env");

export function fetchUser() {
    let url = env.API_URL + 'users';
    return dispatch => {
        dispatch(fetchUsersPendingAction());
        return get(dispatch, url, {}, {}, fetchUsersAction)
    }
}

export function fetchUsersPendingAction() {
    return {
        type: FETCH_USERS_PENDING,
        payload: null
    };
}

export function fetchUsersAction(dispatch, data) {
    return {
        type: FETCH_USERS,
        payload: data.data !== null ? data.data : []
    };
}