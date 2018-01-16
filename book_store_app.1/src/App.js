import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import Mygtukas from './MygtukoPvz/Mygtukas';
import Knyga1 from './DivKnyga1/DivKnyga1';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Knyga1 img="IMG/books_book_01.jpg" title="20 budu issivirti koldunams" author="Aurimas cincikas" rating="5"/>
      </div>
    );
  }
}
export default App;
