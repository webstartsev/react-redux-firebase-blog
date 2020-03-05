import TYPE_ACTIONS from './typeActions.js';

export const signIn = credentials => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: TYPE_ACTIONS.LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: TYPE_ACTIONS.LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: TYPE_ACTIONS.SIGNOUT_SUCCESS });
      });
  };
};
