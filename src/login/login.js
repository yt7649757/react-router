import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import storage from '../utils/storage.js';
import { port } from '../common/port'
import {withRouter} from 'react-router-dom';
// import $ from 'jquery';
// import 'whatwg-fetch';
import axios from 'axios';
import '../style/login.css';
const FormItem = Form.Item;

class Login extends Component {

    componentWillMount () {
        if(storage.get('access_token')) {
            this.props.history.push('/page')
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const history =  this.props.history
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                message.info('登录成功', 1)
                storage.set('access_token', values.userName )
                history.push('/page')

                // $.ajax({
                //     method: 'POST',
                //     url: port + 'api/auth/login',
                //     dataType: 'json',
                //     data: { username: values.userName, password: values.password },
                //     success: function (res) {
                //         if(res.access_token) {
                //             message.info('登录成功', 1)
                //             storage.set('token', res)
                //             history.push('/')
                //         }
                //     },error: function (XMLHttpRequest, textStatus, errorThrown) {
                //             message.info('用户名或密码错误', 1)
                //     }
                // })

                // fetch(port + 'api/auth/login', {
                //     method:'POST',
                //     headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     },
                //     mode: 'no-cors',
                //     body: 'username='+values.userName+'&password='+values.password,
                // }).then(response => response.json())
                //     .then(data =>{
                //         console.log(data)
                //     })
                //     .catch(e => console.log("请求出错", e))

                // axios.post( port + 'api/auth/login', {
                //     username: values.userName,
                //     password: values.password
                // })
                //     .then(function (res) {
                //         if(res.data.access_token) {
                //             message.info('登录成功', 1)
                //             storage.set('access_token', res.data.access_token)
                //             history.push('/page')
                //         }
                //     })
                //     .catch(function (error) {
                //         message.info('用户名或密码错误', 1)
                //         console.log(error);
                //     });

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="/resetPas">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 录
                        </Button>
                        Or <a href="/register">立即注册!</a>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm  = Form.create()(Login);

export default withRouter(WrappedNormalLoginForm) ;