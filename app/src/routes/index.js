import React, {Component} from "react"
import {Switch}           from "react-router-dom"
import {PublicRoute}      from './PublicRoute'
import {HomePage}         from '../features/HomePage'
import {UserList}         from '../features/Users'
import {Login}            from '../features/Login'
import {Register}         from '../features/Register'

class Routes extends Component {
    render() {
        return (
            <Switch>
                {/*Auth route*/}
                <PublicRoute path="/login" layout='Auth'>
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/register" layout='Auth'>
                    <Register/>
                </PublicRoute>
                {/*Auth route*/}

                {/*App route*/}
                <PublicRoute path="/" layout='App' exact={true}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="/products" layout='Auth'>
                    <UserList/>
                </PublicRoute>
                {/*App route*/}
            </Switch>
        );
    }
}

export default Routes
