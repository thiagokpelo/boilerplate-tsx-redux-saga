/* eslint-disable import/no-extraneous-dependencies */
import { createStore, compose, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from 'store/ducks/repositories/types';

import rootReducer from 'store/ducks/rootReducer';
import rootSaga from 'store/ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMonitor = process.env.NODE_ENV === 'development' ? require('store/reactotron') : {};

const sagaMiddlewareOptions = { ...sagaMonitor };

const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

const store: Store<ApplicationState> = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
