import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './sagas/saga';

import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
          sagaMiddleware,
        ),
    );
    sagaMiddleware.run(watcherSaga);
    return store;
};
