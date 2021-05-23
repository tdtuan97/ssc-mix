import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {fetchUserGeneral, fetchUserOrders, fetchUserTransactions} from "../../redux/actions";

class Container extends Component {
    render() {
        const reducer = this.props.user;
        return (
            <President
                user={reducer.user}
                pendingFetchGeneral={reducer.pendingFetchGeneral}
                orders={reducer.orders}
                pendingFetchOrders={reducer.pendingFetchOrders}
                transactions={reducer.transactions}
                pendingFetchTransactions={reducer.pendingFetchTransactions}
                errorMessage="Cannot fetch data"
                messageEmptyList="Empty list"
            />
        )
    }

    componentDidMount() {
        const auth   = this.props.auth;
        const router  = this.props.router;
        const username = router.location.pathname.replace("/users/", "");
        const config = {
            headers: {Authorization: `Bearer ${auth.token}`}
        }
        this.props.fetchUserGeneral(username)
        this.props.fetchUserTransactions(username, config)
        this.props.fetchUserOrders(username, config)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserGeneral: (username) => {
            dispatch(fetchUserGeneral(username));
        },
        fetchUserTransactions: (username, config) => {
            dispatch(fetchUserTransactions(username, config));
        },
        fetchUserOrders: (username, config) => {
            dispatch(fetchUserOrders(username, config));
        },
    };
}

function mapStateToProps(state) {
    return {
        router: state.router,
        auth: state.auth,
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)