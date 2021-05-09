import React, {Component} from 'react';
import {Logo} from "../Logo";
import './style.scss'
import {Link} from "react-router-dom";

class President extends Component {
    render() {
        let headerClass = this.props.isTransparent ? 'header transparent' : 'header';
        let pathname = this.props.router.location.pathname
        return (
            <header className={headerClass}>
                <div className="header-content">
                    <div className="header-logo">
                        <Logo/>
                    </div>
                    <div className="header-menu">
                        <ul className="menu-content">
                            <li className={pathname === '/' ? "menu-item active" : "menu-item"}>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className={pathname === '/users' ? "menu-item active" : "menu-item"}>
                                <Link to='/users'>Users</Link>
                            </li>
                            <li className={pathname === '/orders' ? "menu-item active" : "menu-item"}>
                                <Link to='/orders'>Orders</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-menu auth-menu">
                        <ul className="menu-content">
                            <li className="menu-item">
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/register'>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default President;