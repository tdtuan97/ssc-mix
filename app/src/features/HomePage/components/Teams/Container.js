import React, {Component} from 'react';
import President          from './President';
import {connect}          from 'react-redux';

class Container extends Component {
    render() {
        let users = [
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            },
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            }
            ,
            {
                "username": "trantuan",
                "full_name": "Tran Tuan",
                "title": "叶秀英",
                "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
            }
            ,
        ]
        return (<President users={users}/>)
    }
}

function mapStateToProps(state) {
    return {
        router: state.router
    }
}

export default connect(mapStateToProps, {})(Container)