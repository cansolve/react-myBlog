import React from 'react';
import Header from './header';

export default class Common extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
  }
  
  componentDidMount() {
    // console.log("%c%s","color: red; background: yellow; font-size: 18px;","email: tongxiang608@163.com");
    // console.log("%c%s","color: red; background: yellow; font-size: 18px;","github: github.com/cansolve");

  }
  componentWillReceiveProps(nextProps) {
  }
  render() {
    return (
      <div className={this.state.parentClass}>
        {/*头部组建*/}
        <Header/>

      </div>
    )
  }
}
