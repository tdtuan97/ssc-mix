import React, {Component} from 'react';
import member_image_default from "../../../../../../images/users/user.png";
import {Link} from "react-router-dom";

class Member extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="ant-row member">
                <div className="ant-col ant-col-7">
                    <Link to={'/users/' + user.username}>
                        <div className="member-image">
                            <img src={member_image_default} alt={user.username}/>
                        </div>
                    </Link>
                </div>
                <div className="ant-col ant-col-17">
                    <div className="member-description-wrapper">
                        <Link to={'/users/' + user.username}>
                            <div className="member-username">
                                {user.full_name}
                            </div>
                        </Link>
                        <div className="member-title">公司+职位 信息暂缺</div>
                        <div className="member-description">语雀是一款优雅高效的在线文档编辑与协同工具。</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;