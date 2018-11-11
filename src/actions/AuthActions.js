import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHORIZING,
  LOGIN_UPDATE,
  LOGIN_RESET,
  SAVE_FAIL
} from './types';

export const loginUpdate = ({ field, value }) => {
  return {
    type: LOGIN_UPDATE,
    payload: { field, value }
  };
};

export const loginReset = () => {
  return {
    type: LOGIN_RESET,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTHORIZING });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginSuccess(dispatch, user))
    .catch((error) => {
      console.log(error);
      loginFail(dispatch);
    });
  };
};

export const createUser = ({ firstName, lastName, phone, email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTHORIZING });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginSuccess(dispatch, user);
      })
      .catch(() => loginFail(dispatch))
        .then(() => {
          firebase.database().ref(`/users/${firebase.auth().currentUser.uid}`)
          .set({ firstName, lastName, email, phone });
        })
        .catch((error) => {
          console.log(error);
          saveFail(dispatch);
        });
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });

  // Actions.main();
};

const loginFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL
  });
};

const saveFail = (dispatch) => {
  dispatch({
    type: SAVE_FAIL
  });
};
