import React, {Component} from 'react';
import {CreditCardOutlined} from "@ant-design/icons";
import {Loading, DataError, FormItem} from "../../../../layouts";
import {Button, Card, Input, InputNumber, Form as AntForm} from "antd";

class TransactionForm extends Component {
    formRef = React.createRef();

    onFinish = (values) => {
        console.log(values);
    };

    render() {
        const user                    = this.props.user
        const pendingFetchGeneral     = this.props.pendingFetchGeneral
        const formTransaction         = this.props.formTransaction
        const handleTransactionSubmit = this.props.handleTransactionSubmit
        const handleTransactionReset  = this.props.handleTransactionReset
        const errors                  = formTransaction.errors
        const data                    = formTransaction.data

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
                                         ref={this.formRef}
                                         name="control-ref"
                                         onFinish={data => handleTransactionSubmit(data)}
                                >
                                    <FormItem name="amount"
                                              label="Amount"
                                              errors={errors.amount}
                                    >
                                        <InputNumber className="pay-in-amount"
                                                     min={0}
                                                     placeholder="Amount"
                                        />
                                    </FormItem>
                                    <FormItem name="description" label="Description" errors={errors.description}>
                                        <Input.TextArea
                                            placeholder="Description"
                                        />
                                    </FormItem>
                                    <FormItem {...tailFormItemLayout}>
                                        <Button type="primary" htmlType="submit" className="form-submit"
                                                disabled={formTransaction.pending}>
                                            Pay in
                                        </Button>
                                    </FormItem>
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