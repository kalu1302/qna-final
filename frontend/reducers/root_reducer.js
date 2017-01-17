import SessionReducer from './session_reducer';
import CreatePollReducer from './create_poll_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  session: SessionReducer
  // pollForm: CreatePollReducer
});

export default RootReducer;
