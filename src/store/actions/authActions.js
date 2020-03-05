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

export const signUp = newUser => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initial: `${newUser.firstName[0]}${newUser.lastName[0]}`.toUpperCase()
          });
      })
      .then(() => {
        dispatch({ type: TYPE_ACTIONS.SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: TYPE_ACTIONS.SIGNUP_ERROR, err });
      });
  };
};
