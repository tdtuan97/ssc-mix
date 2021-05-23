import React, {Component} from 'react';
import {Link} from "react-router-dom"
import {Card, Modal, Row} from 'antd';
import member_image_default from "../../../../../../images/users/user.png";
import {InfoCircleOutlined, CreditCardOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {DataError, Loading} from "../../../../../../layouts";

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
                    {
                        props.previewUserPending ? <Loading/>
                            : (
                                props.userPreview !== null ?
                                    (
                                        <Card
                                            actions={[
                                                <div onClick={() => props.handleCancel()}>
                                                    <Link key="edit"
                                                          to={'users/' + props.userPreview.username}>
                                                        <InfoCircleOutlined/> Information
                                                    </Link>
                                                </div>,
                                                <div onClick={() => props.handleCancel()}>
                                                    <Link key="pay-in" to="transactions/create">
                                                        <CreditCardOutlined/> Pay in
                                                    </Link>
                                                </div>,
                                            ]}
                                        >
                                            <Row className="member-detail-wrapper">
                                                <div className="member-image
                                                ant-col-xs-8
                                                ant-col-xs-offset-8
                                                ant-col-sm-6
                                                ant-col-sm-offset-0
                                                ant-col-md-8
                                                ">
                                                    <img src={member_image_default} alt=""/>
                                                </div>
                                                <div
                                                    className="member-detail-content ant-col-xs-24 ant-col-sm-18 ant-col-md-16">
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
                                            </Row>
                                        </Card>
                                    )
                                    : <DataError/>
                            )
                    }
                </div>
            </Modal>
        )
    }
}

export default MemberPreview;