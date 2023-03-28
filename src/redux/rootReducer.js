import {combineReducers} from 'redux';

import * as reducers from './reducers/index';

const reducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
