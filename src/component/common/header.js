import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Affix, Button, Modal } from 'antd';
import Login from './login';
import Register from './register';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      visible: false,
      login: false,
      register: false
    }
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  // 显示登录框
  showLoginModal = (e) => {
    console.log('click ', e);
    this.setState({
      visible: false,
      login: true
    });
  }
  // 显示注册框
  showRegisterModal = () => {
    this.setState({
      visible: false,
      register: true
    });
  }
  // 隐藏模态框
  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  // 取消
  handleLoginCancel = () => {
    this.setState({
      login: false,
    });
  }
  // 取消
  handleRegisterCancel = () => {
    this.setState({
      register: false,
    });
  }
  // 退出
  handleLogout = (e) => {
    this.setState({
      current: e.key,
    });
    window.sessionStorage.userInfo = '';
    this.setState({
      visible: false
    });
  };
  linkPage=()=>{
    window.location.href = 'http://www.cansolve.cn/about.html'
  }
  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    let userInfo = '';
    if (window.sessionStorage.userInfo) {
      userInfo = JSON.parse(window.sessionStorage.userInfo);
    }
    return (
      <Affix offsetTop={0} className="head-box">
        <div className="nav-wrap">
          <div className="logo fl">
            <Link to="/"><img src="../../assets/images/logo.png" alt="" /></Link>
          </div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu-wrap fl">
            <Menu.Item key="home">
              <Link to="/home"><i className="fa fa-home"></i>首页</Link>
            </Menu.Item>
            <Menu.Item key="hot">
              <Link to="/hot"><i className="fa fa-fire"></i>热门</Link>
            </Menu.Item>
            <Menu.Item key="opening">
              <Link to="/opening"><i className="fa fa-flask"></i>开源技术</Link>
            </Menu.Item>
            <Menu.Item key="message">
              <Link to="/message"><i className="fa fa-commenting"></i>留言</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="javascript:;" onClick={this.linkPage}><i className="fa fa-user-circle"></i>关于</a>
            </Menu.Item>
          </Menu>
          <div>
            {userInfo ? (
              <Menu
                onClick={this.handleLogout}
                style={{ width: 220, lineHeight: '64px', display: 'inline-block' }}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon type="user" /> {userInfo.name}
                    </span>
                  }
                >
                  <MenuItemGroup>
                    <Menu.Item key="logout">退出</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            ) : (
                <div className="btns">
                  <Button
                    type="primary"
                    icon="login"
                    style={{ marginRight: '15px' }}
                    onClick={this.showLoginModal}
                  >
                    登 录
										</Button>
                  <Button
                    type="danger"
                    icon="logout"
                    style={{ marginRight: '15px' }}
                    onClick={this.showRegisterModal}
                  >
                    注 册
										</Button>
                </div>
              )}
          </div>
        </div>
        <Login visible={this.state.login} handleCancel={this.handleLoginCancel} />
        <Register visible={this.state.register} handleCancel={this.handleRegisterCancel} />
      </Affix>
    )
  }
}


export default Header;