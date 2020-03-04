import TYPE_ACTION from '../actions/typeActions';

const initialState = {
  posts: [
    { id: '1', title: 'React Redux Firebase - is awesome!', content: 'Всем привет!!!' },
    { id: '2', title: 'Начинаем изучать React', content: 'Всем привет!!!' },
    { id: '3', title: "Redux в React'e", content: 'Всем привет!!!' }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_ACTION.CREATE_POST:
      console.log(action.post);
      return state;
    default:
      return state;
  }
};

export default postReducer;
