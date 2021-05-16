import initialState                                  from "./initialState";
import {FETCH_USERS, FIND_BY_USERNAME, PREVIEW_USER} from "./constants";

export function reducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: payload.data
            };
        case FIND_BY_USERNAME:
            return {
                ...state,
                previewUser: payload.data
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