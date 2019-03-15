import {createStore} from 'redux';
import tradeReducer from "reducers/tradeReducer";
import { fetchTrade } from './actions/actions';


function configureStore(state = {}) {
    return createStore(tradeReducer,state);
  }

  export default configureStore;