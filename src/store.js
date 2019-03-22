import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import tradeReducer from "reducers/tradeReducer";

const loggerMiddleware = createLogger();
function configureStore(state = {}) {
    return createStore(tradeReducer,state,applyMiddleware(thunkMiddleware,loggerMiddleware));
  }

  export default configureStore;