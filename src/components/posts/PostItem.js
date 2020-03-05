import React from 'react';
import moment from 'moment';

const PostItem = ({ post }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gret-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p>
          Автор: {post.authorFirstName} {post.authorLastName}
        </p>
        <p className="grey-text">{moment(post.createAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default PostItem;
