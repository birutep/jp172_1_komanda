import React, { Component } from 'react';
import pagrindinesKlases from './App.css';

import SubHeader from './SubHeader/SubHeader';
import SubHeaderBottomBuyBooks from './SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';

class App extends Component {
  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <SubHeader name="Buy Books"></SubHeader>
        <SubHeaderBottomBuyBooks/>
      </div>
    );
  }
}
export default App;


