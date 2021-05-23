import {get} from "../../../common/crud"
import {FETCH_USERS, FETCH_USERS_PENDING, FIND_BY_USERNAME, FIND_BY_USERNAME_PENDING, PREVIEW_USER} from "./constants";

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

export function fetchUsersAction(data) {
    return {
        type: FETCH_USERS,
        payload: data.data !== null ? data.data : []
    };
}

export function findByUsername(username) {
    let url = env.API_URL + 'users/username/' + username;
    return dispatch => {
        dispatch(findByUsernamePendingAction())
        return get(dispatch, url, {}, {}, findByUsernameAction)
    }
}

export function findByUsernamePendingAction() {
    return {
        type: FIND_BY_USERNAME_PENDING,
        payload: null
    };
}

export function findByUsernameAction(data) {
    return {
        type: FIND_BY_USERNAME,
        payload: data.data
    };
}

export function previewUser(flag) {
    return dispatch => {
        dispatch(previewUserAction(flag));
    }
}

export function previewUserAction(flag) {
    return {
        type: PREVIEW_USER,
        payload: flag
    };
}