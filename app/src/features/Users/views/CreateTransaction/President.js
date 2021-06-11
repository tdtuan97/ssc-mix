import React, {Component} from 'react';
import {UserGeneral} from "../../components";
import {
    Row,
    Col
} from 'antd';
import {TransactionForm} from "../../components";


class President extends Component {
    render() {
        const errorMessage            = this.props.errorMessage;
        const user                    = this.props.user
        const pendingFetchGeneral     = this.props.pendingFetchGeneral
        const handleTransactionSubmit = this.props.handleTransactionSubmit
        const handleTransactionReset  = this.props.handleTransactionReset
        const formTransaction         = this.props.formTransaction
        return (
            <div className="features feature-user">
                <Row gutter={24}
                     className="user-detail">
                    <Col xs={24} md={8}>
                        <UserGeneral
                            user={user}
                            pendingFetchGeneral={pendingFetchGeneral}
                            errorMessage={errorMessage}
                        />
                    </Col>
                    <Col xs={24} md={16}>
                        <TransactionForm
                            user={user}
                            pendingFetchGeneral={pendingFetchGeneral}
                            handleTransactionSubmit={handleTransactionSubmit}
                            handleTransactionReset={handleTransactionReset}
                            formTransaction={formTransaction}
                            errorMessage={errorMessage}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default President;