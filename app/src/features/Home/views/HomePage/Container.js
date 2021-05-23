import React, {Component} from 'react';
import {connect} from 'react-redux';
import President from './President';
import {fetchUser, previewUser, findByUsername} from "../../redux/actions"

class Container extends Component {
    handlePreview = (username) => {
        this.props.previewUser(true)
        this.props.findByUsername(username)
    }

    handleOk = () => {
        this.props.previewUser(false)
    }

    handleCancel = () => {
        this.props.previewUser(false)
    }

    render() {
        let home = this.props.home;
        return (
            <President
                users={home.users}
                fetchUsersPending={home.fetchUsersPending}
                preview={home.preview}
                userPreview={home.previewUser}
                previewUserPending={home.previewUserPending}
                handlePreview={this.handlePreview}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
            />
        )
    }

    componentDidMount() {
        this.props.fetchUser();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => {
            dispatch(fetchUser());
        },
        previewUser: (flag) => {
            dispatch(previewUser(flag));
        },
        findByUsername: (username) => {
            dispatch(findByUsername(username));
        },
    };
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)