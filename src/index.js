import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore , applyMiddleware , combineReducers} from 'redux';
import { accountReducer } from './Reducers/account';
import { bonusReducer } from './Reducers/bonus';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(combineReducers({
  account : accountReducer,
  bonus : bonusReducer
}) ,applyMiddleware(logger,thunk));




root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

reportWebVitals();
