import React, {Component} from 'react';
import {Banner, Teams, Content} from "./components";

class President extends Component{
    render() {
        return (
            <div className="template">
                <Banner/>
                <Teams/>
                <Content/>
            </div>
        );
    }
}

export default President;