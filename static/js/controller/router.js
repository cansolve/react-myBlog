import React from 'react';
import {
  Router,
  Route,
  hashHistory,
} from 'react-router';
import { Provider } from 'react-redux';
import {
  syncHistoryWithStore,
} from 'react-router-redux';

import Store from './store';
const history = syncHistoryWithStore(hashHistory, Store);

/*
	前端模块引入
*/
// import Index from './component/index/index'; //首页
// import Demo from './component/demo/index'; //demo

/*
	前端路由配置	
*/
let cacheUrl = '';

class RouterNav extends React.Component {
  constructor(props) {
    super(props);
  }
  checkAuto(url) {
    if (cacheUrl === url) {
      return;
    }

    Auto(url);
    cacheUrl = url;
  }
  render() {
    return (
      <Provider store={Store}>
        <Router history={history}>
          <Route
            path='/'
            name='首页'
            getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./component/index/index').default);
              }, 'index');
            }}
          />

          <Route
            path='/demo'
            name='列表'
            getComponent={(location, cb) => {
              require.ensure([], require => {
                cb(null, require('./component/demo/index').default);
              }, 'demo');
            }} /> 
            
          
        </Router>
      </Provider>
    )
  }
}

export default RouterNav;