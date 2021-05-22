import {get} from "../../../common/crud"
import {FETCH_USERS, FIND_BY_USERNAME, PREVIEW_USER} from "./constants";

const env = require("../../../config/env");

export function fetchUser() {
    let url = env.API_URL + 'users';
    return dispatch => {
        return get(dispatch, url, {}, fetchUserAction)
    }
}

export function fetchUserAction(data) {
    return {
        type: FETCH_USERS,
        payload: data
    };
}

export function findByUsername(username) {
    let url = env.API_URL + 'users/username/' + username;
    return dispatch => {
        return get(dispatch, url, {}, findByUsernameAction)
    }
}

export function findByUsernameAction(data) {
    return {
        type: FIND_BY_USERNAME,
        payload: data
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