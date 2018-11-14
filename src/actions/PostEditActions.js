// import firebase from 'firebase';
// import { Actions } from 'react-native-router-flux';
import {
  POST_EDIT_UPDATE,
  // POST_CREATE,
  // POSTS_FETCH_SUCCESS,
  // POST_SAVE_SUCCESS,
  // POST_DELETE
 } from './types';

export const postEditUpdate = ({ prop, value }) => {
  return {
    type: POST_EDIT_UPDATE,
    payload: { prop, value }
  };
};

// export const postCreate = ({ postText }) => {
//   const { currentUser } = firebase.auth();
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/posts`)
//     .push({ postText })
//     .then(() => {
//       dispatch({ type: POST_CREATE });
//       Actions.pop();
//     });
//   };
// };
//
// export const postsFetch = () => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/posts`)
//       .on('value', snapshot => {
//         dispatch({ type: POSTS_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   };
// };
//
// export const postSave = ({ name, phone, shift, id }) => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/posts/${id}`)
//       .set({ name, phone, shift })
//       .then(() => {
//         dispatch({ type: POST_SAVE_SUCCESS });
//         Actions.postList({ type: 'reset' });
//       });
//   };
// };
//
// export const postDelete = ({ id }) => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/posts/${id}`)
//       .remove()
//       .then(() => {
//         dispatch({ type: POST_DELETE });
//         Actions.postList({ type: 'reset' });
//     });
//   };
// };
