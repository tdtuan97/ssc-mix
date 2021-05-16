import React, {Component}   from 'react';
import {Button}             from "antd";
import member_image_default from "../../../../images/users/user.png";

class Member extends Component {
    render() {
        const user = this.props.user;
        return (
            <div className="ant-row member">
                <div className="ant-col ant-col-7">
                    <div className="member-image"
                         onClick={() => this.props.handlePreview(user.username)}>
                        <img src={member_image_default} alt={user.username}/>
                    </div>

                </div>
                <div className="ant-col ant-col-17">
                    <div className="member-description-wrapper">
                        <Button type="link"
                                onClick={() => this.props.handlePreview(user.username)}>
                            <div className="member-username">
                                {user.full_name}
                            </div>
                        </Button>
                        <div className="member-title">公司+职位 信息暂缺</div>
                        <div className="member-description">语雀是一款优雅高效的在线文档编辑与协同工具。</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member;