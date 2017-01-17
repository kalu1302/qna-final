import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import SessionReducer from '../reducers/session_reducer';

const defaultState = {session: {currentUser: null, errors: []}};

const configureStore = (preLoadedState = defaultState) => {
  return createStore(RootReducer,
              preLoadedState,
              applyMiddleware(thunk)
            );
  };

export default configureStore;
