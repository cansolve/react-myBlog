import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon ,Affix,Button} from 'antd';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',

    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    return (
      <Affix offsetTop={0} className="head-box">
        <div className="nav-wrap">
          <div className="logo fl">
            logo
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
              <Link to="/about.html"><i className="fa fa-user-circle"></i>关于</Link>
            </Menu.Item>
          </Menu>
          <div className="btns fr">
            <Button type="primary" className="login"><Icon type="login" />登录</Button>
            <Button type="danger" className="regest"><Icon type="login" />注册</Button>
          </div>
        </div>
        </Affix>
    )
  }
}


export default Header;