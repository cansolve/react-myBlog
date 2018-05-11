import React from 'react';
import Fetch from '@fetch';
import Storage from '@tools/storage';
import { FromInput, FromSelect, FromTextArea, FromCheckBox } from '@module/formControl';

class Crumbs extends React.Component {
  constructor(props) {
    super(props);
    let val = Storage.get('key');
    if (val == null) {
      val = '1';
    }
    Storage.set('key', val);
    this.state = {
      value: val,
      projects: []
    }
  }
  componentDidMount() {
    var _this = this;
    (async function () {
      let val = await Fetch({
        url: '/api/listAllProject',
        method: 'POST',
        param: {
          currentPage: '0'
        }
      });
      if (val.msg.code == '0000') {
        _this.setState({
          projects: val.content.list
        })
      } else {

      }
    })()
  }
  sendAjax(event) {
    let val = event.target.value;
    Storage.set('key', val);
    window.location.reload();
  }
  render() {


    return (
      <div className="breadcrumbs">
        <ul className="breadcrumb">
          <li>
            <i className="icon-home home-icon"></i>
            <a href="#">首页</a>
          </li>
          <li className="active">
            {this.props.route ? this.props.route.name : ''}
          </li>
        </ul>
        <div className="nav-search" id="nav-search">
          <form className="form-search">
            <select className="form-control"
              onChange={this.sendAjax.bind(this)} value={this.state.value}>
              {
                this.state.projects.map((items, i) => {
                  return (<option value={items.id} key={i}>{items.projectName}</option>)
                })
              }
            </select>
          </form>
        </div>
      </div>
    )
  }
}

export default Crumbs;