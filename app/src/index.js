import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import store from "./common/store";
import history from './common/history'
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from "connected-react-router";
import Routes from "./routes"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
