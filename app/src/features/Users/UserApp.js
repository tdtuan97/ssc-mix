import React, {Component} from 'react';

class UserApp extends Component {
    render() {
        return (
            <div className="user-app">
                <div className="user-app-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default UserApp