import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const PostDetail = props => {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  return post ? (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>
            Создал {post.authorFirstName} {post.authorLastName}
          </div>
          <div>{moment(post.createAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container center">Загрузка поста...</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'posts' }])
)(PostDetail);
