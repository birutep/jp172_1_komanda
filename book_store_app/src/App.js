import React, { Component } from 'react';
import pagrindinesKlases from './App.css';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// import Register from './LoginRegister/Register';
// import Login from './LoginRegister/Login';

import knygos from '../src/data/books.json';




class App extends Component {

  render() {
    return (
      <div className={pagrindinesKlases.App}>
        <Header />
        <Nav />
        <Content />
        <Footer />
        {/* <Register /> */}
        {/* <Login />*/}

      </div>
    );
  }
}
export default App;


