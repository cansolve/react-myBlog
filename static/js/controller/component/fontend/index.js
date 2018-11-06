import React from 'react';
import Dispatch from '../../dispatch';
import Common from '../common/common';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '前端资源',
    }

  }
  
  render() {
    return (
      <div>
        {this.state.value}
      </div>
    )
  }
}

export default Dispatch(Index);