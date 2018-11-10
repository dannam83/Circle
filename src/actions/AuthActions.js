import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN,
  LOGIN_UPDATE
} from './types';

export const loginUpdate = ({ field, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { field, value }
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginSuccess(dispatch, user))
      .catch(() => loginFail(dispatch));
      });
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });

  Actions.main();
};

const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL
  });
};
