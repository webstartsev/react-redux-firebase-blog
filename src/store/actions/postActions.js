import TYPE_ACTION from './typeActions';

export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: TYPE_ACTION.CREATE_POST, post });
  };
};
