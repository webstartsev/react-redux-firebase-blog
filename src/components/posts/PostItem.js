import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gret-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>{post.content}</p>
        <p className="grey-text">04.03.2019 15:46</p>
      </div>
    </div>
  );
};

export default PostItem;
