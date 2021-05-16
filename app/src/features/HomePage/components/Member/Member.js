import React, {Component}   from 'react';
import {Link} from "react-router-dom";
import member_image_default from "../../../../images/users/user.png";

class Member extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="ant-row member">
                <div className="ant-col ant-col-7">
                    <div className="member-image">
                        <img src={member_image_default} alt=""/>
                    </div>
                </div>
                <div className="ant-col ant-col-17">
                    <div className="member-description-wrapper">
                        <div className="member-username">
                            <Link to={"users/" + user.username}>
                                {user.full_name}
                            </Link>
                        </div>
                        <div className="member-title">{user.title}</div>
                        <div className="member-description">{user.description}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;