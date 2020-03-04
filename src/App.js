import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetail from './components/posts/PostDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreatePost} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
