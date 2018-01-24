import React from 'react';
import headerioStiliai from './Header.css';
import SupportHelp from './Support_help/Support_help';
import Login from './Login/Login';
import { Link } from 'react-router-dom';

const Header = ( props ) => { 
    return (
        <div className={headerioStiliai.header}>
            <header>
            <div className={headerioStiliai.header_bookStore}>
            <p><i className="fa fa-book" />&ensp;Book Store</p>
            </div>
            {/* <i className="fa fa-circle"></i> */}
            <Link to='/help' className={headerioStiliai.helpas}><SupportHelp pavadinimas={'Help Center'}/></Link>
            <Link to='/support'><SupportHelp pavadinimas={'Our Support'}/></Link>
            {/* <Support_help pavadinimas={'Help Center'}/>
            <Support_help pavadinimas={'Our Support'}/> */}
            <Login /> 
            </header>
        </div>
    )
};

export default Header;
