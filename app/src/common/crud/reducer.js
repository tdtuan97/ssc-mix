import initialState from "./initialState";
import {RESPONSE_ACTION, RESET_ACTION, PENDING_ACTION} from "./constants";
import {LOCATION_CHANGE} from 'connected-react-router';

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case LOCATION_CHANGE:
        case RESET_ACTION:
            return {
                ...state,
                ...initialState,
                pending: false
            };
        case PENDING_ACTION:
            return {
                ...state,
                pending: true
            };
        case RESPONSE_ACTION:
            return {
                ...state,
                ...payload,
                pending: false
            };
        default:
            return state;
    }
}