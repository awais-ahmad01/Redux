import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';      //react redux work as a bridge b/w react and redux . Provider handles the redux store(containing data) and it wraps all the application

import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>    
    <App />
  </Provider>
);

