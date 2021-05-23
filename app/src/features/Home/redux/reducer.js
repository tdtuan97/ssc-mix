import initialState from "./initialState";
import {FETCH_USERS, FETCH_USERS_PENDING, FIND_BY_USERNAME, FIND_BY_USERNAME_PENDING, PREVIEW_USER} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                fetchUsersPending: false,
                users: payload,
            };
        case FETCH_USERS_PENDING: {
            return {
                ...state,
                fetchUsersPending: true
            };
        }
        case FIND_BY_USERNAME:
            return {
                ...state,
                previewUserPending: false,
                previewUser: payload
            };
        case FIND_BY_USERNAME_PENDING:
            return {
                ...state,
                previewUserPending: true,
            };
        case PREVIEW_USER:
            return {
                ...state,
                previewUser: null,
                preview: payload,
            };
        default:
            return state;
    }
}