import TYPE_ACTION from './typeActions';

export const createPost = post => {
  return (dispatch, getState, getFirebase) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection('posts')
      .add({
        ...post,
        authorFirstName: 'Sergey',
        authorLastName: 'Statsev',
        authorId: 1111,
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
