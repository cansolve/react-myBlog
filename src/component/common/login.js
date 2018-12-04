import React from 'react';
import {  Modal, Input, Icon, message, Button } from 'antd';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

    }
    componentDidMount() { }
    login = ({ email, password }) => {

    }
    handleOk = () => {
        const reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
        if (!this.state.email) {
            message.warn('邮箱不能为空！');
        } else if (!reg.test(this.state.email)) {
            message.warn('请输入格式正确的邮箱！');
        } else if (!this.state.password) {
            message.warn('密码不能为空');
        } else {
            this.login(this.state);
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    render() {
        return (
            <Modal
                title="登录"
                style={{ top: '25%' }}
                visible={this.props.visible}
                onCancel={this.props.handleCancel}
                width={400}
                footer={null}
            >
                <div className="login-input">
                    <Input
                        style={{ marginBottom: 20 }}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Input
                        style={{ marginBottom: 40 }}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="login-submit">
                    <Button style={{ width: '100%' }} type="primary" onClick={this.handleOk}>
                        登录
					</Button>
                </div>
            </Modal>
        );
    }
}

export default Login;