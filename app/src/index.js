import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import store from "./common/store";
import history from './common/history'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route} from "react-router-dom";

import {HomePage} from "./features/HomePage";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
