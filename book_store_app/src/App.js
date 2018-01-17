import React, { Component } from 'react';
import pagrindinesKlases from './App.css';
import DivKnyga4 from './DivaiKnygomsAtvaizduot/DivKnyga4/DivKnyga4';


class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <DivKnyga4 img="./IMG/books_book_01.jpg" name="Aurimo patarimai riešų stiprinimui" author="Aurimas Činčikas" price="50" description="Aurimas atskleidžia paslaptį, kaip jam per dvi savaites pavyko sustiprinti dešinės rankos riešą."/>
      </div>
    );
  }
}
export default App;


