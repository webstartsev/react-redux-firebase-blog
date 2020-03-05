import React from 'react';
import { isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

const AuthIsLoaded = props => {
  const { children, auth } = props;

  if (!isLoaded(auth)) {
    return <div />;
  }

  return children;
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(AuthIsLoaded);
