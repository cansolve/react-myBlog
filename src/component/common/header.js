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
        <div className="container clearfix">
          <div className="icon-wrap fl"></div>
          <div className="menus fl">
            <ul className="navbar-nav">
              <li className="menu-item"><Link to="/home">首页</Link></li>
              <li className="menu-item"><Link to="/hot">热门</Link></li>
              <li className="menu-item"><Link to="/opening">开源技术</Link></li>
              <li className="menu-item"><Link to="/message">留言</Link></li>
              <li className="menu-item"><Link to="/about.html">关于</Link></li>
            </ul>
          </div>
          <div className="search-wrap fr"></div>
        </div>
      </div>
    )
  }
}


export default Header;