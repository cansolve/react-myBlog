import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    hashHistory,
} from 'react-router-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import Store from './store';
/*
	前端界面的css样式引用
*/

import './assets/css/index.css'
/*路由引入*/
import RouterNav from './router';

ReactDOM.render( 
    <Provider store={Store}>
        <RouterNav />
    </Provider>,
    document.getElementById('app')
);
