import {applyMiddleware, compose, createStore} from "redux";
import createRootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== undefined ?
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(createRootReducer(), composeEnhancers(applyMiddleware(thunk)));

export { store };
