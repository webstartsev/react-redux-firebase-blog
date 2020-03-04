import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="project-list section">
      {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
