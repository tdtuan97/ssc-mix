import axios from "axios";
import {RESPONSE_ACTION, RESET_ACTION, PENDING_ACTION} from './constants'
import {clearToken} from "../../features/Auth/redux/actions";

export const CODE_BAD_REQUEST     = 400;
export const CODE_NOT_FOUND       = 404;
export const CODE_SERVER_ERROR    = 500;
export const CODE_SUCCESS         = 200;
export const CODE_UNAUTHENTICATED = 401;

export function reset() {
    return dispatch => {
        dispatch(resetAction())
    }
}

export function resetAction() {
    return {
        type: RESET_ACTION,
        payload: null
    };
}

export function pendingAction() {
    return {
        type: PENDING_ACTION,
        payload: null
    };
}

export function get(dispatch, url = '', data = {}, callback = null) {
    dispatch(pendingAction())
    return axios.get(url, data).then(response => {
        resolve(dispatch, response, callback)
    }).catch(reason => {
        reject(dispatch, reason, callback)
    });
}

export function post(dispatch, url = '', data = {}, callback = null) {
    dispatch(pendingAction())
    return axios.post(url, data).then(response => {
        resolve(dispatch, response, callback)
    }).catch(reason => {
        reject(dispatch, reason, callback)
    });
}

export function resolve(dispatch, response, callback) {
    dispatch(responseAction(response))
    if (typeof callback === "function") {
        dispatch(callback(response.data))
    }
}

export function reject(dispatch, reason, callback) {
    const response = reason.response
    dispatch(responseAction(response))
    if (typeof callback === "function") {
        dispatch(callback(response.data))
    }
    if (response.status === CODE_UNAUTHENTICATED || response.code === CODE_UNAUTHENTICATED){
        dispatch(clearToken())
    }
}

function responseAction(response) {
    const data    = response.data
    const payload = {
        data: data.data,
        code: data.code,
        message: data.message,
        errors: data.errors,
        status: response.status,
        statusText: response.statusText,
    }

    return {
        type: RESPONSE_ACTION,
        payload: payload
    };
}