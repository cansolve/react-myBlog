import React from 'react';

import Dispatch from '../../dispatch';

import Common from '../common/common';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        detailId : this.props.match.params.id,
    }

  }

  render() {
    return (
      <Common {...this.props} >
        <div className="pages-wrap">
          <div className="page-header">
            
          </div>
          <h1>当前页面ID：{this.state.detailId}</h1>

        </div>

      </Common>
    )
  }
}

export default Dispatch(Index);