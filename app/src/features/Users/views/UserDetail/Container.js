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
        const config = {
            headers: {Authorization: `Bearer ${auth.token}`}
        }
        this.props.fetchUserGeneral(auth.username)
        this.props.fetchUserTransactions(auth.id, config)
        this.props.fetchUserOrders(auth.id, config)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserGeneral: (username) => {
            dispatch(fetchUserGeneral(username));
        },
        fetchUserTransactions: (id, config) => {
            dispatch(fetchUserTransactions(id, config));
        },
        fetchUserOrders: (id, config) => {
            dispatch(fetchUserOrders(id, config));
        },
    };
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)