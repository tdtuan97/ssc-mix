import React, {Component}                       from 'react';
import {connect}                                from 'react-redux';
import President                                from './President';
import {fetchUser, previewUser, findByUsername} from "./redux/actions"

class Container extends Component {
    handlePreview = (username) => {
        this.props.previewUser(true)
        this.props.findByUsername(username)
    }

    handleOk = () => {
        this.props.previewUser(false)
    }

    handleCancel = () => {
        this.props.previewUser(false)
    }

    render() {
        let home = this.props.home;
        return (
            <President
                users={home.users}
                preview={home.preview}
                userPreview={home.previewUser}
                handlePreview={this.handlePreview}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
            />
        )
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    clone() {
        return [
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            },
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "公司+职位 信息暂缺",
                "description": "语雀是一款优雅高效的在线文档编辑与协同工具。",
            }
        ]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => {
            dispatch(fetchUser());
        },
        previewUser: (flag) => {
            dispatch(previewUser(flag));
        },
        findByUsername: (username) => {
            dispatch(findByUsername(username));
        },
    };
}

function mapStateToProps(state) {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)