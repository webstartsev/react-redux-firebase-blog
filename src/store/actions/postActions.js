import TYPE_ACTION from './typeActions';

export const createPost = post => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('posts')
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: TYPE_ACTION.CREATE_POST, post });
      })
      .catch(err => {
        dispatch({ type: TYPE_ACTION.CREATE_POST_ERROR, err });
      });
  };
};
