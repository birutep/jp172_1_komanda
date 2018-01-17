import React from 'react';
import Support_help_stiliai from './Support_help.css';

const Support_help = ( props ) => { 
    return (
        <div className={Support_help_stiliai.header_help_support}>
           {props.pavadinimas}
        </div>
        )
};

export default Support_help;
