import React from 'react';
import Button from '@material-ui/core/Button';
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
      <header className="navbar">
        <div className="container">
          <div className="icon-wrap"></div>
          <div className="menus"></div>
          <div className="search-wrap"></div>
        </div>
      </header>
    )
  }
}


export default Header;