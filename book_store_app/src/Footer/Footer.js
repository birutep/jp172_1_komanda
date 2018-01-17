import React from 'react';
import footerioStiliai from './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ( props ) => { 
    return (
        <footer className={footerioStiliai.footer}>
        <Link to='/help'><div className={footerioStiliai.footer_help}><i className="fa fa-question-circle" title="Help center"></i></div></Link>
        <div className={footerioStiliai.footer_settings}><i className="fa fa-cog fa-fw" title="Account settings"></i></div>          
        </footer>
    )
};

export default Footer;
