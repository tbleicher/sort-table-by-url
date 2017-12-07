import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import { URLSortedTable } from './components/table';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Sort-Table-by-URL</h1>
          </header>
          <Route path="/:sortby?" component={URLSortedTable} />
        </div>
      </Router>
    );
  }
}

export default App;
