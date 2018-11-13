import {
  POST_UPDATE,
  POST_CREATE,
  POST_SAVE_SUCCESS,
  POST_DELETE
} from '../actions/types';

const INITIAL_STATE = {
  postType: '',
  postText: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_UPDATE:
      return { ...state, postText: action.payload };
    case POST_CREATE:
      return INITIAL_STATE;
    case POST_SAVE_SUCCESS:
      return INITIAL_STATE;
    case POST_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
