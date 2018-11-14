import React, {Component} from 'react';
import {Layout, Menu, Avatar, Icon, Dropdown, message} from 'antd';
import {withRouter} from 'react-router-dom';
import storage from '../utils/storage.js';
import '../style/header.css'

const {Header} = Layout;

class HeaderComponent extends Component {

    constructor(props) {
        super(props)
        this.signOut = this.signOut.bind(this)
    }

    componentWillReceiveProps(nextProps) {
    }


    signOut = () => {
        storage.remove('access_token')
        message.success('注销成功', 1);
        this.props.history.push('/login')
        // const { pathname } = this.props.location;
        // //动态改变标题
        // if(pathname === '/signOut') {
        //     document.title = '登录'
        // }
    }

    render() {
        const menu = (
            <Menu>
                {/*这里a标签要给/signOut，否则无法正常跳转*/}
                <Menu.Item>
                    <a rel="noopener noreferrer"
                       onClick={this.signOut}>注销</a>
                </Menu.Item>
            </Menu>
        );


        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px', float: 'left'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <div className="userInfo">
                    <Avatar size="large" icon="user"/>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link">
                            Hover me <Icon type="down"/>
                        </a>
                    </Dropdown>
                </div>
            </Header>
        )
    }
}


export default withRouter(HeaderComponent);