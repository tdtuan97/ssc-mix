import React, {Component} from 'react';
import {UserGeneral} from "../../components";
import {
    Row,
    Col
} from 'antd';
import {TransactionForm} from "../../components";
import {ModalConfirm} from "../../../../layouts";

class President extends Component {
    render() {
        const {
                  errorMessage,
                  user,
                  pendingFetchGeneral,
                  handleTransactionSubmit,
                  formTransaction,
                  generalMenu,
                  visibleConfirm,
                  handleOK,
                  handleCancel,
              } = this.props
        return (
            <div className="features feature-user">
                <Row gutter={24}
                     className="user-detail">
                    <Col xs={24} md={8}>
                        <UserGeneral
                            user={user}
                            pendingFetchGeneral={pendingFetchGeneral}
                            errorMessage={errorMessage}
                            generalMenu={generalMenu}
                        />
                    </Col>
                    <Col xs={24} md={16}>
                        <TransactionForm
                            user={user}
                            pendingFetchGeneral={pendingFetchGeneral}
                            handleSubmitForm={handleOK}
                            formTransaction={formTransaction}
                            errorMessage={errorMessage}
                        />
                    </Col>
                </Row>
                <ModalConfirm
                    onOk={handleTransactionSubmit}
                    visible={visibleConfirm}
                    onCancel={handleCancel}
                    message="Are you sure ?"
                />
            </div>
        )
    }
}

export default President;