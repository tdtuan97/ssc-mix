import React, {Component} from 'react';
import {Link}             from "react-router-dom";
import {Logo}             from "../Logo";

class President extends Component {
    render() {
        let pathName          = this.props.router.location.pathname
        const classItem       = "menu-item";
        const classItemActive = "menu-item active";
        const classHeader = this.props.isTransparent === true ? "header transparent" : "header";
        return (
            <header className={classHeader}>
                <div className="header-content">
                    <div className="header-logo">
                        <Logo/>
                    </div>
                    <div className="header-menu">
                        <ul className="menu-content">
                            <li className={pathName === "/" ? classItemActive : classItem}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={pathName === "/products" ? classItemActive : classItem}>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-menu auth-menu">
                        <ul className="menu-content">
                            <li className="menu-item">
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default President;