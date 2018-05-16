import React from 'react';

import Dispatch from '../../dispatch'
import Common from '../common/common';


class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Common {...this.props}>
        <a href="#/demo" className="btn btn-primary">查看demo</a>
      </Common>
    )
  }
}

export default Dispatch(Index);