import React, {Component} from 'react';
import {CreditCardOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {Loading} from "../../../../layouts/Loading";
import {Avatar, Card} from "antd";
import img_user from "../../../../images/users/user.png";
import {DataError} from "../../../../layouts"
import {Link} from "react-router-dom";

class UserGeneral extends Component {
    render() {
        const user                = this.props.user
        const pendingFetchGeneral = this.props.pendingFetchGeneral
        return (
            <Card title={
                <div>
                    <UserOutlined/> General
                </div>
            }
                  actions={[
                      <Link key="orders-create" to="/orders/create" target="_blank">
                          <ShoppingCartOutlined/> New order
                      </Link>,
                      <Link key="transactions-create" to="/transactions/create" target="_blank">
                          <CreditCardOutlined/> Pay in
                      </Link>,
                  ]}
            >
                {
                    pendingFetchGeneral ? <Loading/> :
                        (
                            user === null ? <DataError/> :
                                <div className="user-data-wrapper">
                                    <div className="user-data avatar-wrapper text-center">
                                        <Avatar
                                            src={img_user}
                                            size={100}
                                        />
                                        <div className="avatar-label">
                                            {user.full_name}
                                        </div>
                                        <div className="avatar-description">
                                            海纳百川，有容乃大
                                        </div>
                                    </div>
                                    <div className="user-data account-wrapper">
                                        <div className="account-data">
                                                        <span className="account-data-key">
                                                            UUID:
                                                        </span>
                                            <span className="account-data-value">
                                                            {user.id}
                                                        </span>
                                        </div>
                                        <div className="account-data">
                                                        <span className="account-data-key">
                                                            Username:
                                                        </span>
                                            <span className="account-data-value">
                                                            {user.username}
                                                        </span>
                                        </div>
                                        <div className="account-data">
                                                        <span className="account-data-key">
                                                            Full name:
                                                        </span>
                                            <span className="account-data-value">
                                                            {user.full_name}
                                                        </span>
                                        </div>
                                        <div className="account-data">
                                                        <span className="account-data-key">
                                                            Balance:
                                                        </span>
                                            <span className="account-data-value">
                                                            {user.balance}
                                                        </span>
                                        </div>
                                    </div>
                                </div>
                        )
                }
            </Card>
        )
    }
}

export default UserGeneral