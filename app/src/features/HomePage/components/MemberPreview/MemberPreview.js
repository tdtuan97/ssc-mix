import React, {Component}   from 'react';
import {Modal}              from 'antd';
import {Loading}            from "../../../../layouts/Loading";
import member_image_default from "../../../../images/users/user.png";

class MemberPreview extends Component {
    render() {
        const props = this.props;
        return (
            <Modal title="Member"
                   visible={props.preview}
                   onOk={(e => props.handleOk(e))}
                   onCancel={(e => props.handleCancel(e))}
                   footer={null}
            >
                <div className="preview-member-wrapper">
                    {props.userPreview === null
                        ? <Loading/>
                        :
                        (
                            <div className="member-detail-wrapper">
                                <div className="member-image">
                                    <img src={member_image_default} alt=""/>
                                </div>
                                <div className="member-detail-content">
                                    <div className="member-detail">
                                        <span className="title">UUID:</span>
                                        <span className="value">{props.userPreview.id}</span>
                                    </div>
                                    <div className="member-detail">
                                        <span className="title">Username:</span>
                                        <span className="value">{props.userPreview.username}</span>
                                    </div>
                                    <div className="member-detail">
                                        <span className="title">Full name:</span>
                                        <span className="value">{props.userPreview.full_name}</span>
                                    </div>
                                    <div className="member-detail">
                                        <span className="title">Balance:</span>
                                        <span className="value">{props.userPreview.balance}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </Modal>
        )
    }
}

export default MemberPreview;