import {get, post} from "../../../common/crud"
import {
    FETCH_USER_GENERAL_ACTION,
    FETCH_USER_TRANSACTIONS_ACTION,
    FETCH_USER_ORDERS_ACTION,
    PENDING_FETCH_USER_GENERAL_ACTION,
    PENDING_FETCH_USER_TRANSACTIONS_ACTION,
    PENDING_FETCH_USER_ORDERS_ACTION,
    USER_TRANSACTIONS_SUBMIT_ACTION,
    USER_TRANSACTIONS_PENDING_ACTION,
    USER_TRANSACTIONS_RESET_ACTION,
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

export function fetchUserGeneralAction(data) {
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

export function fetchUserTransactionAction(data) {
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

export function fetchUserOrdersAction(data) {
    return {
        type: FETCH_USER_ORDERS_ACTION,
        payload: data.data !== undefined && data.data !== null ? data.data : []
    };
}

// ========================== User create transaction ==========================
export function userTransactionsSubmit(data, config) {
    let url = env.API_URL + 'transactions/pay-in';
    return dispatch => {
        dispatch(userTransactionsPendingAction())
        return post(dispatch, url, data, config, userTransactionsSubmitAction)
    }
}

export function userTransactionsPendingAction() {
    return {
        type: USER_TRANSACTIONS_PENDING_ACTION,
        payload: true
    };
}

export function userTransactionsReset() {
    return dispatch => {
        dispatch(userTransactionsResetAction())
    }
}

export function userTransactionsResetAction() {
    return {
        type: USER_TRANSACTIONS_RESET_ACTION,
        payload: {
            data: {},
            errors: {}
        }
    };
}

export function userTransactionsSubmitAction(data) {
    const payload   = {
        data: data.data !== undefined && data.data !== null ? data.data : {},
        errors: data.errors !== undefined && data.errors !== null ? data.errors : {},
    }
    return {
        type: USER_TRANSACTIONS_SUBMIT_ACTION,
        payload: payload
    };
}
