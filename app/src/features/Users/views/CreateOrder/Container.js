import React, {Component} from 'react';
import President from './President';
import {connect} from 'react-redux';
import {
    fetchUserGeneral,
    userTransactionsSubmit,
    userOrdersSubmit,
} from "../../redux/actions";
import {createMatchSelector} from "connected-react-router";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleConfirm: false,
            formData: {
                username: this.getUsername(),
                amount: null,
                description: null
            }
        }
    }

    handleOrderSubmit = () => {
        const config = {
            headers: {Authorization: `Bearer ${this.props.auth.token}`}
        }
        this.props.userOrdersSubmit(this.state.formData, config)

        // Close popup
        this.setState({
            ...this.state,
            visibleConfirm: false
        })
    }

    handleOK = (data) => {
        this.setState({
            ...this.state,
            visibleConfirm: true,
            formData: {
                ...this.state.formData,
                ...data
            }
        })
    }

    handleCancel = () => {
        this.setState({
            ...this.state,
            visibleConfirm: false
        })
    }

    render() {
        const reducer        = this.props.user;
        const visibleConfirm = this.state.visibleConfirm;
        const generalMenu    = [
            'transactions-create',
            'information',
        ];
        return (
            <President
                user={reducer.user}
                pendingFetchGeneral={reducer.pendingFetchGeneral}
                formOrder={reducer.formOrder}
                handleOrderSubmit={this.handleOrderSubmit}
                generalMenu={generalMenu}
                visibleConfirm={visibleConfirm}
                handleOK={this.handleOK}
                handleCancel={this.handleCancel}
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
        userOrdersSubmit: (data, config) => {
            dispatch(userOrdersSubmit(data, config));
        },
    };
}

function mapStateToProps(state) {
    const matchSelector = createMatchSelector("/users/:username/orders/create");
    return {
        auth: state.auth,
        user: state.user,
        match: matchSelector(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)