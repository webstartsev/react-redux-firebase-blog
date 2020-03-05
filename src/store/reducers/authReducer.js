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
    case TYPE_ACTIONS.SIGNOUT_SUCCESS:
      console.log(`signout success`);
      return state;
    case TYPE_ACTIONS.SIGNUP_SUCCESS:
      console.log(`signup success`);
      return {
        ...state,
        authError: null
      };
    case TYPE_ACTIONS.SIGNUP_ERROR:
      console.log(`signup error`);
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
