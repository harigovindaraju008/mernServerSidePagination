import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// middlewares
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
