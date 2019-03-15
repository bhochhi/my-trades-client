import {createStore} from 'redux';
import tradeReducer from "reducers/tradeReducer";

function configureStore(state = {}) {
    return createStore(tradeReducer,state);
  }
  export default configureStore;