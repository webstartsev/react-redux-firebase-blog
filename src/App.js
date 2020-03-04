import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import BlogDetail from './components/blogs/BlogDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/post/:id" component={BlogDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
