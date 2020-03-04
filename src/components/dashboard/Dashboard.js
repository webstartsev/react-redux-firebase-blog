import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <PostList />
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
