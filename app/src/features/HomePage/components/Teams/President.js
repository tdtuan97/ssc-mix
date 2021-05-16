import React, {Component} from "react";
import {Member}           from "../Member";

class President extends Component {
    render() {
        return (
            <div className="home-page-wrapper teams-wrapper">
                <div className="home-teams">
                    <div className="title-wrapper">
                        <h1><span>团队成员</span></h1>
                    </div>
                    <div className="member-wrapper">
                        <div className="ant-row block-wrapper">
                            {this.props.users.map((user, i) => {
                                return (
                                    <div className="ant-col block ant-col-xs-24 ant-col-md-8">
                                        <Member key={i} user={user}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default President;