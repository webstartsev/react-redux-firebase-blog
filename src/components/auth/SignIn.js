import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SingIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handlerChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { authError } = this.props;

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
              <button className="btn pink lighten-1 z-depth-0">Войти</button>
              {authError && <p className="red-text center">{authError}</p>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
