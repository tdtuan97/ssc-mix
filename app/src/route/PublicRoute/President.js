import React, {Component} from 'react';
import './style.scss'
import {Route} from "react-router-dom";

class President extends Component{
    render() {
        return(
            <Route path="/">
                {this.props}
            </Route>
        )
    }
}

export default President;