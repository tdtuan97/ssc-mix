import React, {Component} from "react"
import {Switch} from "react-router-dom"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import {HomePage, ContactPage, AboutPage} from '../features/Home'
import {UserDetail, CreateTransaction, CreateOrder} from '../features/Users'
import {Login, Register} from '../features/Auth'
import {ErrorPage} from "../features/Exceptions";

class Routes extends Component {
    render() {
        const rules = [
            'admin'
        ];
        return (
            <Switch>
                {/*Public route*/}
                <PublicRoute path="/login" layout='Auth'>
                    <Login/>
                </PublicRoute>
                <PublicRoute path="/register" layout='Auth'>
                    <Register/>
                </PublicRoute>

                <PublicRoute path="/errors/:code" layout='App'>
                    <ErrorPage layout='App'/>
                </PublicRoute>

                <PublicRoute path="/" layout='App' exact={true}>
                    <HomePage/>
                </PublicRoute>
                <PublicRoute path="/contact" layout='App'>
                    <ContactPage/>
                </PublicRoute>
                <PublicRoute path="/about" layout='App'>
                    <AboutPage/>
                </PublicRoute>
                {/*Public route*/}

                {/*Private route*/}
                <PrivateRoute path="/users/:id" layout='App' exact={true}>
                    <UserDetail/>
                </PrivateRoute>
                <PrivateRoute path="/users/:id/transactions/create" layout='App' roles={rules}>
                    <CreateTransaction/>
                </PrivateRoute>
                <PrivateRoute path="/users/:id/orders/create" layout='App' roles={rules}>
                    <CreateOrder/>
                </PrivateRoute>
                {/*Private route*/}

                <PublicRoute path="*">
                    <ErrorPage code={404} />
                </PublicRoute>
            </Switch>
        );
    }

}

export default Routes
