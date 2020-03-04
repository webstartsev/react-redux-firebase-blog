import React from 'react';

const PostDetail = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Название поста - {id}</span>
          <p>Большой текст поста</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Создал Sergey Startsev</div>
          <div>04.03.2019 16:02</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
