import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import MygtukasDark from './Mygtukai/MygtukasDark';
import MygtukasLight from './Mygtukai/MygtukasLight';
import MygtukasDarkSmall from './Mygtukai/MygtukasDarkSmall';
import MygtukasLightSmall from './Mygtukai/MygtukasLightSmall';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Footeris />
        <MygtukasDark pavadinimas={'Dark mygtukas'} />
        <MygtukasLight pavadinimas={'Light mygtukas'} />
        <MygtukasDarkSmall pavadinimas={'Dark mini'} />
        <MygtukasLightSmall pavadinimas={'Light mini'} />
        <Footeris />
      </div>
    );
  }
}
export default App;
