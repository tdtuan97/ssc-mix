import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {
    fetchUserGeneral, userTransactionsReset,
    userTransactionsSubmit
} from "../../redux/actions";
import {createMatchSelector} from "connected-react-router";

class Container extends Component {
    handleTransactionSubmit = (data) => {
        const config = {
            headers: {Authorization: `Bearer ${this.props.auth.token}`}
        }
        data         = {...data, username: this.getUsername(), amount: null}
        this.props.userTransactionsSubmit(data, config)
    }

    handleTransactionReset = () => {
        this.props.userTransactionsReset()
    }

    render() {
        const reducer = this.props.user;
        return (
            <President
                user={reducer.user}
                pendingFetchGeneral={reducer.pendingFetchGeneral}
                formTransaction={reducer.formTransaction}
                handleTransactionSubmit={this.handleTransactionSubmit}
                handleTransactionReset={this.handleTransactionReset}
            />
        )
    }

    componentDidMount() {
        this.props.fetchUserGeneral(this.getUsername())
    }

    getUsername = () => {
        return this.props.match.params.username
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserGeneral: (username) => {
            dispatch(fetchUserGeneral(username));
        },
        userTransactionsSubmit: (data, config) => {
            dispatch(userTransactionsSubmit(data, config));
        },
        userTransactionsReset: () => {
            dispatch(userTransactionsReset());
        },

    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/users/:username/transactions/create");
    return {
        auth: state.auth,
        user: state.user,
        match: matchSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)