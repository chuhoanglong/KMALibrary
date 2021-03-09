import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import sagaMiddleware from '../middleware/sagaMiddleware';

const logger = createLogger({
    collapsed: true,
    timestamp: false,
    duration: true
});

const middlewareProduction = [sagaMiddleware];

if (__DEV__) {
    middlewareProduction.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewareProduction));

export default store;
