import React, {Component} from 'react';
import {CreditCardOutlined} from "@ant-design/icons";
import {Loading, DataError, AntFormItem} from "../../../../layouts";
import {Button, Card, Input, InputNumber, Form as AntForm} from "antd";

class TransactionForm extends Component {

    render() {
        const {
                  user,
                  pendingFetchGeneral,
                  formTransaction,
                  handleSubmitForm,
              } = this.props;

        const errors = formTransaction.errors

        return (
            <Card title={
                <div>
                    <CreditCardOutlined/> Pay in
                </div>
            } className="transaction-form">
                {
                    pendingFetchGeneral ? <Loading/> :
                        (
                            user === null ? <DataError/> :
                                <AntForm {...formItemLayout}
                                         name="control-ref"
                                         onFinish={data => handleSubmitForm(data)}
                                >
                                    <AntFormItem name="amount"
                                                 label="Amount"
                                                 errors={errors.amount}
                                    >
                                        <InputNumber className="pay-in-amount"
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
                                                disabled={formTransaction.pending}>
                                            Pay in
                                        </Button>
                                    </AntFormItem>
                                </AntForm>
                        )
                }
            </Card>
        )
    }
}

export default TransactionForm
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