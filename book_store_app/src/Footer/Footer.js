import React from 'react';
import footerioStiliai from './Footer.css';

const Footer = ( props ) => { 
    return (
       <footer className={footerioStiliai.footer}>
        <div className={footerioStiliai.footer_help}><i className="fa fa-question-circle" title="Help center"></i></div>
            <div className={footerioStiliai.footer_settings}><i className="fa fa-cog fa-fw" title="Account settings"></i></div>          
        </footer>
    )
};

export default Footer;
