import React, {Component} from 'react';
import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import HeaderComponent from '../common/header';
import Aside from '../common/aside'
// import { Link } from 'react-router-dom';
// import '../style/app.css'

const { SubMenu } = Menu;
const { Content, Sider, Footer } = Layout;

class Template extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout style={{height:'100%'}}>
                <HeaderComponent/>
                <Layout style={{paddingTop: '64px'}}>
                    <Aside/>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        {/*动态变化的部分,利用了react的props.children的特性*/}
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 780 }}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center', padding: 0, marginTop: 30 }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
                {/*<Footer style={{ textAlign: 'center' }}>*/}
                    {/*Ant Design ©2018 Created by Ant UED*/}
                {/*</Footer>*/}
            </Layout>
        )
    }
}


export default Template