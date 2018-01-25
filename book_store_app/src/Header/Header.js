import React, { Component } from 'react';
import headerioStiliai from './Header.css';
import SupportHelp from './Support_help/Support_help';
import Login from './Login/Login';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as filterActions from '../store/filterActions';

class Header extends Component {
    render() { 
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
    }
};

const mapStateToProps = state => {
    return {
        log: state.login      
    };
};

const mapDispatchToProps = dispatch => {        
    return {
        onOpenLogin: () => dispatch({type: filterActions.OPEN_LOGIN}),
        onCloseLogin: () => dispatch({type: filterActions.CLOSE_LOGIN})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);
