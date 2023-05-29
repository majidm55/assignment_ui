import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import storeConfiguration  from '../src/app/store/index';
import CounterApp from '../src/app/App';

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
