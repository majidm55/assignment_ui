import { all } from 'redux-saga/effects';
import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import type { CombinedState, Reducer } from 'redux';

// sagas
import {
  rootSaga as reportDataSaga,
} from './models/reportData/sagas';

// reducers
import { reportDataModelReducer } from './models/reportData/reducer';

const appReducer = combineReducers({
  models: combineReducers({
  reportData: reportDataModelReducer,
  }),
});

export type AppState = ReturnType<typeof appReducer>;

const rootReducer: Reducer<CombinedState<AppState>> = (state, action) => appReducer(state, action);


const sagaMiddleware = createSagaMiddleware();

const storeConfiguration = () => {
  let store;

  if (process.env.NODE_ENV !== 'production') {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(
        logger,
        sagaMiddleware,
      )),
    );

  } else {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(
        sagaMiddleware,
      )),
    );
  }

  function* rootSaga() {
    yield all([
      ...reportDataSaga,
    ])
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeConfiguration;
