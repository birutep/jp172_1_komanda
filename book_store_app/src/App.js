import React, { Component } from 'react';
import pagrindinesKlases from './App.css';
import Login from './LoginRegister/Login';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
      <Login></Login>
      </div>
    );
  }
}
export default App;


