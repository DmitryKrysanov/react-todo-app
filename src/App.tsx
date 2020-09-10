import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={ Todo }/>
        <Route path="/profile" exact component={ UserProfile }/>
        <Route path="/auth/:method" exact component={ Auth }/>
        <Route path="/auth/" exact component={ Auth }/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
