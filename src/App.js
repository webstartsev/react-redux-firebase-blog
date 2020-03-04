import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogDetail from './components/blogs/BlogDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/post/:id" component={BlogDetail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
