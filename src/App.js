import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UsersManagmentUI from './components/UsersManagmentUI';
import DetailsCard from './components/DetailsCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={UsersManagmentUI} />
        <Route path="/details/:id" component={DetailsCard} />
      </div>
    );
  }
}

export default App;
