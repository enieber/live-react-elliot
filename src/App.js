import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClientList from './ClientList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientList />
      </div>
    );
  }
}

export default App;
