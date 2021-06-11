import initialState from "./initialState";
import {
    FETCH_USER_GENERAL_ACTION,
    FETCH_USER_TRANSACTIONS_ACTION,
    FETCH_USER_ORDERS_ACTION,
    PENDING_FETCH_USER_GENERAL_ACTION,
    PENDING_FETCH_USER_TRANSACTIONS_ACTION,
    PENDING_FETCH_USER_ORDERS_ACTION,
    USER_TRANSACTIONS_RESET_ACTION,
    USER_TRANSACTIONS_PENDING_ACTION,
    USER_TRANSACTIONS_SUBMIT_ACTION,
    USER_ORDERS_PENDING_ACTION,
    USER_ORDERS_RESET_ACTION,
    USER_ORDERS_SUBMIT_ACTION
} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case FETCH_USER_GENERAL_ACTION:
            return {
                ...state,
                user: payload,
                pendingFetchGeneral: false
            };
        case FETCH_USER_TRANSACTIONS_ACTION:
            return {
                ...state,
                transactions: payload,
                pendingFetchTransactions: false
            };
        case FETCH_USER_ORDERS_ACTION:
            return {
                ...state,
                orders: payload,
                pendingFetchOrders: false
            };
        case PENDING_FETCH_USER_GENERAL_ACTION:
            return {
                ...state,
                pendingFetchGeneral: true
            };
        case PENDING_FETCH_USER_TRANSACTIONS_ACTION:
            return {
                ...state,
                pendingFetchTransactions: true
            };
        case PENDING_FETCH_USER_ORDERS_ACTION:
            return {
                ...state,
                pendingFetchOrders: true
            };

        case USER_TRANSACTIONS_PENDING_ACTION:
            return {
                ...state,
                formTransaction: {
                    ...state.formTransaction,
                    pending: true
                }
            };
        case USER_TRANSACTIONS_RESET_ACTION:
            return {
                ...state,
                formTransaction: {
                    ...state.formTransaction,
                    data: {},
                    errors: {},
                    pending: false,
                }
            };
        case USER_TRANSACTIONS_SUBMIT_ACTION:
            return {
                ...state,
                formTransaction: {
                    ...state.formTransaction,
                    ...action.payload,
                    pending: false,
                }
            };
        case USER_ORDERS_PENDING_ACTION:
            return {
                ...state,
                formOrder: {
                    ...state.formOrder,
                    pending: true
                }
            };
        case USER_ORDERS_RESET_ACTION:
            return {
                ...state,
                formOrder: {
                    ...state.formOrder,
                    data: {},
                    errors: {},
                    pending: false,
                }
            };
        case USER_ORDERS_SUBMIT_ACTION:
            return {
                ...state,
                formOrder: {
                    ...state.formOrder,
                    ...action.payload,
                    pending: false,
                }
            };
        default:
            return state;
    }
}