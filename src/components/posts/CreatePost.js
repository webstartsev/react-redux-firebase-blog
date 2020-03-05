import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.history.push('/');
  };

  handlerChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handlerSubmit} className="white">
            <h5 className="grey-text text-darken-3">Создать новый пост</h5>
            <div className="input-field">
              <label htmlFor="title">Заголовок</label>
              <input type="text" id="title" onChange={this.handlerChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Контент</label>
              <textarea
                name="content"
                id="content"
                className="materialize-textarea"
                onChange={this.handlerChange}
              ></textarea>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Опубликовать</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
