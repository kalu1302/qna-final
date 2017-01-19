import SessionReducer from './session_reducer';
import CreatePollReducer from './create_poll_reducer';
import TakePollReducer from './take_poll_reducer';
import TakePollIndexReducer from './take_poll_index_reducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  session: SessionReducer,
  takePoll: TakePollReducer,
  pollIndex: TakePollIndexReducer
  // pollForm: CreatePollReducer
});

export default RootReducer;
