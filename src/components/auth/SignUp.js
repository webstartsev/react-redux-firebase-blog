import React, { Component } from 'react';

class SingUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
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
            <h5 className="grey-text text-darken-3">Войти</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handlerChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" onChange={this.handlerChange} />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">Имя</label>
              <input type="text" id="firstName" onChange={this.handlerChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Фамилия</label>
              <input type="text" id="lastName" onChange={this.handlerChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Регистрация</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SingUp;
