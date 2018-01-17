import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import Footeris from './FooterPvz/Footeris';
import Mygtukas from './MygtukoPvz/Mygtukas';
import SubHeader from './SubHeader/SubHeader';
import SubHeaderBottom from './SubHeader/SubheaderBottom/SubheaderBottom';
import SubheaderBottom from './SubHeader/SubheaderBottom/SubheaderBottom';
// import Knopf from './Knopf/Knopf';
// import Search from './Search/Search';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <SubHeader name="Browse Available Books"></SubHeader>
        <SubheaderBottom/>
        {/* <Knopf spausti="All books"></Knopf>
        <Knopf spausti="Most Recent"></Knopf>
        <Knopf spausti="Most Popular"></Knopf>
        <Knopf spausti="Free Books"></Knopf>
        <Search></Search> */}
      </div>
    );
  }
}
export default App;


