import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Main from './Main';

import { createStore,combineReducers } from 'redux';
import { Reducers } from './reducers';
import { Provider } from 'react-redux';
export const Store = createStore(combineReducers(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(<Provider store={Store}>
    <Main />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
