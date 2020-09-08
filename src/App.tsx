import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';
import { Switch, Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={ Todo }/>
        <Route path="/auth/:method" exact component={ Auth }/>
        <Route path="/auth/" exact component={ Auth }/>
        <Redirect to="/"/>
      </Switch>
    </div>
  );
}

export default App;
