import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import Mygtukas from './MygtukoPvz/Mygtukas';
import Header from './SubHeader/SubHeader';
import Knopf from './Knopf/Knopf';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Header></Header>
        <Knopf></Knopf>
        <Knopf></Knopf>

      </div>
    );
  }
}
export default App;
