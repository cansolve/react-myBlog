import React from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  componentDidMount() { }
  componentWillUnmount() { }

  render() {
    
    return (
      
      <div className="navbar">
        <div className="container">
          <div className="icon-wrap"></div>
          <div className="menus">
            <ul className="navbar-nav">
              <li className="menu-item"><Link to="/swiper">首页</Link></li>
              <li className="menu-item">热门</li>
              <li className="menu-item">生活分享</li>
              <li className="menu-item">留言</li>
              <li className="menu-item">开源技术</li>
            </ul>
          </div>
          <div className="search-wrap"></div>
        </div>
      </div>
    )
  }
}


export default Header;