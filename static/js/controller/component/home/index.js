import React from 'react';
import Dispatch from '../../dispatch';
import Common from '../common/common';
import DialogDemo from './dialog';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '博客首页',
    }

  }

  render() {
    return (
      <Common {...this.props} >
        {this.state.value}
        <a href="#/fontend">前端资源</a>
       
      </Common>
    )
  }
}

export default Dispatch(Index);