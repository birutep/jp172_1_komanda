import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import Mygtukas from './MygtukoPvz/Mygtukas';
import Nav from './Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Nav />
      </div>
    );
  }
}
export default App;
