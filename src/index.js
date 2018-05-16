import React, {Component} from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import models from './reducers/index';
import App from './components/app';

let store = createStore(models);
let rootElement = document.getElementById('app');

render(<Provider store={store} ><App /></Provider>, rootElement);