import {get, post} from "../../../common/crud"
import {
    FETCH_USER_GENERAL_ACTION,
    FETCH_USER_TRANSACTIONS_ACTION,
    FETCH_USER_ORDERS_ACTION,
    PENDING_FETCH_USER_GENERAL_ACTION,
    PENDING_FETCH_USER_TRANSACTIONS_ACTION,
    PENDING_FETCH_USER_ORDERS_ACTION,
} from "./constants";

let env = require("../../../config/env");

// ========================== User general ==========================
export function fetchUserGeneral(username) {
    let url = env.API_URL + 'users/username/' + username;
    return dispatch => {
        dispatch(pendingFetchUserGeneralAction())
        return get(dispatch, url, {}, {}, fetchUserGeneralAction)
    }
}

export function pendingFetchUserGeneralAction() {
    return {
        type: PENDING_FETCH_USER_GENERAL_ACTION,
        payload: true
    };
}

export function fetchUserGeneralAction(dispatch, data) {
    return {
        type: FETCH_USER_GENERAL_ACTION,
        payload: data.data
    };
}

//========================== User transactions ==========================
export function fetchUserTransactions(username, config) {
    let url = env.API_URL + 'users/' + username + '/transactions';
    return dispatch => {
        dispatch(pendingFetchUserTransactionsAction())
        return post(dispatch, url, {}, config, fetchUserTransactionAction)
    }
}

export function pendingFetchUserTransactionsAction() {
    return {
        type: PENDING_FETCH_USER_TRANSACTIONS_ACTION,
        payload: true
    };
}

export function fetchUserTransactionAction(dispatch, data) {
    return {
        type: FETCH_USER_TRANSACTIONS_ACTION,
        payload: data.data !== undefined && data.data !== null ? data.data : []
    };
}

// ========================== User orders ==========================
export function fetchUserOrders(username, config) {
    let url = env.API_URL + 'users/' + username + '/orders';
    return dispatch => {
        dispatch(pendingFetchUserOrdersAction())
        return post(dispatch, url, {}, config, fetchUserOrdersAction)
    }
}

export function pendingFetchUserOrdersAction() {
    return {
        type: PENDING_FETCH_USER_ORDERS_ACTION,
        payload: true
    };
}

export function fetchUserOrdersAction(dispatch, data) {
    return {
        type: FETCH_USER_ORDERS_ACTION,
        payload: data.data !== undefined && data.data !== null ? data.data : []
    };
}
