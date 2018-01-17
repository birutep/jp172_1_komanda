import React from 'react';
import headerioStiliai from './Header.css';
import Support_help from './Support_help/Support_help';
import Login from './Login/Login';

const Header = ( props ) => { 
    return (
        <div className={headerioStiliai.header}>
            <header>
            <div className={headerioStiliai.header_bookStore}>
            <p><i className="fa fa-book"></i>&ensp;Book Store</p>
            </div>
           
            <Support_help pavadinimas={'Help Center'}/> 
            <Support_help pavadinimas={'Our Support'}/> 
            <Login/> 
            </header>
        </div>
    )
};

export default Header;
