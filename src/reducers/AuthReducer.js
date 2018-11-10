import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN,
  LOGIN_UPDATE,
  LOGIN_RESET
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
  switch (action.type) {
    case LOGIN_UPDATE:
      return { ...state, [action.payload.field]: action.payload.value };
    case LOGIN_RESET:
      return INITIAL_STATE;
    case LOGIN:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, };
    case LOGIN_FAIL:
      return { ...state, password: '', loading: false, error: 'Authentication Failed' };
    default:
      return state;
  }
};
