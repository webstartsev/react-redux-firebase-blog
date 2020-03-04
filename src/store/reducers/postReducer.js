const initialState = {
  posts: [
    { id: '1', title: 'React Redux Firebase - is awesome!', content: 'Всем привет!!!' },
    { id: '2', title: 'Начинаем изучать React', content: 'Всем привет!!!' },
    { id: '3', title: "Redux в React'e", content: 'Всем привет!!!' }
  ]
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default postReducer;
