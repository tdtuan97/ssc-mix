import React, {Component} from "react"
import {Switch} from "react-router-dom"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import {HomePage} from '../features/HomePage'
import {UserList} from '../features/Users'
import {Login, Register} from '../features/Auth'

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/*Public route*/}
                <PublicRoute path="/login" layout='Auth'>
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/register" layout='Auth'>
                    <Register/>
                </PublicRoute>

                <PublicRoute path="/" layout='App' exact={true}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="/products" layout='Auth'>
                    <UserList/>
                </PublicRoute>
                {/*Public route*/}


                {/*Private route*/}
                <PrivateRoute path="/users" layout='App'>
                    <UserList/>
                </PrivateRoute>
                {/*Private route*/}
            </Switch>
        );
    }
}

export default Routes
