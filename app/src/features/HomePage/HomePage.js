import React, {Component} from "react";
import Header from '../../layouts/Header'
import {Banner} from "./components";
import './style.scss'

class HomePage extends Component{
    render() {
        return (
            <div className="home-welcome-page">
                <Header isTransparent={true}/>
                <Banner/>
            </div>
        );
    }
}

export default HomePage