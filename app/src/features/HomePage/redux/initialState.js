// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.

const initialState = {
    users: [
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        },
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        },
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        },
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        },
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        },
        {
            "id": "70712153081c4620a8e9",
            "username": "trantuan",
            "full_name": "Tran Dinh Tuan",
            "balance": "0 VND",
            "created_at": "2021-05-08T01:52:18+00:00"
        }
    ],
    preview: false,
    previewUser: null
};

export default initialState;
