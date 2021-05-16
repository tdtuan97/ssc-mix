import React, {Component} from 'react';
import {App}              from "../../layouts/App";
import {Route}            from "react-router-dom";

class Container extends Component{
    render() {
        let component = null;
        switch (this.props.layout) {
            case 'App':
                component =  <App>{this.props.children}</App>
                break;
            default:
                break;
        }

        return this.props.exact ?
            (<Route path={this.props.path} exact>{component}</Route>)
            : (<Route path={this.props.path}>{component}</Route>)
    }
}

export default Container;