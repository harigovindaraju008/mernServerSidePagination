import { combineReducers } from 'redux';
import userReducer from '../containers/Users/reducer';

// intialize reducers 
const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
