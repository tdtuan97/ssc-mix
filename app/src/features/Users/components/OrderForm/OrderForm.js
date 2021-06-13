import React, {Component} from 'react';
import {CreditCardOutlined} from "@ant-design/icons";
import {Loading, DataError, AntFormItem} from "../../../../layouts";
import {Button, Card, Input, InputNumber, Form as AntForm} from "antd";

class OrderForm extends Component {

    render() {
        const {
                  user,
                  pendingFetchGeneral,
                  formOrder,
                  handleOK
              }      = this.props;
        const errors = formOrder.errors

        return (
            <Card title={
                <div>
                    <CreditCardOutlined/> New order
                </div>
            } className="order-form">
                {
                    pendingFetchGeneral ? <Loading/> :
                        (
                            user === null ? <DataError/> :
                                <AntForm {...formItemLayout}
                                         name="control-ref"
                                         onFinish={data => handleOK(data)}
                                >
                                    <AntFormItem name="amount"
                                                 label="Amount"
                                                 errors={errors.amount}
                                    >
                                        <InputNumber className="order-amount"
                                                     min={0}
                                                     placeholder="Amount"
                                        />
                                    </AntFormItem>
                                    <AntFormItem name="description" label="Description" errors={errors.description}>
                                        <Input.TextArea
                                            placeholder="Description"
                                        />
                                    </AntFormItem>
                                    <AntFormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" className="form-submit"
                                                disabled={formOrder.pending}>
                                            Create order
                                        </Button>
                                    </AntFormItem>
                                </AntForm>
                        )
                }
            </Card>
        )
    }
}

export default OrderForm
const formItemLayout     = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 6},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 6,
        },
    },
};