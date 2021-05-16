import React, {Component}           from 'react';
import {Form, Input, Button}        from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

class President extends Component {
    render() {
        return (
            <div className="feature-login">
                <Form className="ant-form ant-form-vertical">
                    <Form.Item name="username">
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Username"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item name="full_name">
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Full name"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                            size="large"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"
                                htmlType="submit"
                                size="large"
                                block>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default President;