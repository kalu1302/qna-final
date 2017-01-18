import SessionReducer from './session_reducer';
import CreatePollReducer from './create_poll_reducer';
import TakePollReducer from './take_poll_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  session: SessionReducer,
  takePoll: TakePollReducer
  // pollForm: CreatePollReducer
});

export default RootReducer;
