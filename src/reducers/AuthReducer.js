import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHORIZING,
  LOGIN_UPDATE,
  LOGIN_RESET,
  SAVE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

// console.log(action); insert console.log in export to see all actions
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };
    case LOGIN_RESET:
      return INITIAL_STATE;
    case AUTHORIZING:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, };
    case LOGIN_FAIL:
      return { ...state, password: '', loading: false, error: 'Authentication Failed' };
    case SAVE_FAIL:
      return { ...state, password: '', loading: false, error: 'Profile Not Saved' };
    default:
      return state;
  }
};
