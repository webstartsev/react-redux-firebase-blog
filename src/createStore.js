import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import rootReducer from './store/reducers/rootReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
