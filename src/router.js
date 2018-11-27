import React , { Component }from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import history from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import Store from './store';


//
import Message from './component/message/index';
import Home from './component/home/index';
import Opening from './component/opening/index';
import Hot from './component/hot/index';
/*
	前端路由配置	
*/
class RouterNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Provider store={Store}>
        <HashRouter history={history()}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/message" component={Message} />
            <Route path="/home" component={Home} />
            <Route path="/opening" component={Opening} />
            <Route path="/hot" component={Hot} />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default RouterNav;