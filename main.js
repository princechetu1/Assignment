import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import books from './src/reducers/index';
import App from './src/components/app';

 let store = createStore(books);
let rootElement = document.getElementById('app');

render(<Provider store={store} ><App /></Provider>, rootElement);