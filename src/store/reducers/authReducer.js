import TYPE_ACTIONS from '../actions/typeActions';

const initialState = { authError: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_ACTIONS.LOGIN_SUCCESS:
      console.log(`login success`);
      return {
        ...state,
        authError: null
      };
    case TYPE_ACTIONS.LOGIN_ERROR:
      console.log(`login error`);
      return {
        ...state,
        authError: 'Ошибка авторизации'
      };
    default:
      return state;
  }
};

export default authReducer;
