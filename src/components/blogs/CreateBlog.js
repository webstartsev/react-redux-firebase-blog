import React, { Component } from 'react';

class CreateBlog extends Component {
  state = {
    title: '',
    content: ''
  };

  handlerSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handlerChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
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

export default CreateBlog;
