import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import Mygtukas from './MygtukoPvz/Mygtukas';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Footeris />
          <Mygtukas pavadinimas={'Mygtukas1'} />
          <Mygtukas pavadinimas={'Mygtukas1'} />
          <Mygtukas pavadinimas={'SuperMygtukas'} />
        <Footeris />
      </div>
    );
  }
}
export default App;
