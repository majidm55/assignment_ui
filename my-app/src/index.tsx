import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import storeConfiguration  from '../src/app/store/index';
import CounterApp from '../src/app/CounterApp';

const container = document.getElementById('root')!;
const root = createRoot(container);
const store = storeConfiguration()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterApp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
