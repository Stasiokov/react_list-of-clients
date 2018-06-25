import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import WebPage from './components/WebPage'
import allReducers from './reducers/index'

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <WebPage/>
    </Provider>
,
document.getElementById('root'));

registerServiceWorker();






