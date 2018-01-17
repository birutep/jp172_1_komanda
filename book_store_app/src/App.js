import React, { Component } from 'react';
import pagrindinesKlases from './App.css';
import Nav from './Nav/Nav';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Nav />
        <Content />
      </div>
    );
  }
}
export default App;


