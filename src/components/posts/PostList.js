import React from 'react';
import PostItem from './PostItem';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div className="project-list section">
      {posts &&
        posts.map(post => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostItem post={post} />
          </Link>
        ))}
    </div>
  );
};

export default PostList;
