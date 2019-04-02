import React , { Component }from 'react';
import {HashRouter, Route, Switch,Router} from 'react-router-dom';
import history from 'history/createBrowserHistory';
//
import Message from './component/message/index';
import Home from './component/home/index';
import Opening from './component/opening/index';
import Hot from './component/hot/index';
import Details from './component/details/index';
/*
	前端路由配置	
*/
class RouterNav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <HashRouter history={history()}>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/message" component={Message} />
              <Route path="/home" component={Home} />
              <Route path="/details/:id" component={Details} />
              <Route path="/opening" component={Opening} />
              <Route path="/hot" component={Hot} />
          </Switch>
        </HashRouter>
    )
  }
}

export default RouterNav;