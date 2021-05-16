import React, {Component} from "react";
import {Switch} from "react-router-dom";
import {PublicRoute} from './PublicRoute'
import {HomePage} from '../features/HomePage'
import {UserList} from '../features/Users'

class Routes extends Component {
    render() {
        return (
            <Switch>
                <PublicRoute path="/" layout='App' exact={true}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="/users" layout='App'>
                    <UserList/>
                </PublicRoute>
                <PublicRoute path="/users/:username" layout='App'>
                    <UserList/>
                </PublicRoute>
            </Switch>
        );
    }
}

export default Routes
