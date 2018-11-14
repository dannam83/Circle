import {
  POST_CREATE_UPDATE,
  POST_CREATE_SAVE,
  POST_SAVE_SUCCESS,
  POST_DELETE
} from '../actions/types';

const INITIAL_STATE = {
  postType: '',
  postText: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_CREATE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case POST_CREATE_SAVE:
      return INITIAL_STATE;
    case POST_SAVE_SUCCESS:
      return INITIAL_STATE;
    case POST_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
