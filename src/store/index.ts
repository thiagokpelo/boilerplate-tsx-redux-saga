import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from 'store/ducks/repositories/types';

import rootReducer from 'store/ducks/rootReducer';
import rootSaga from 'store/ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
