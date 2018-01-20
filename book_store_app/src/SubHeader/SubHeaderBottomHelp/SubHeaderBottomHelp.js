import React from 'react';
import Knopf from '../../Knopf/Knopf';
import SearchKlase from './SubHeaderBottomHelp.css';

const subBottomHelp = ( props ) => { 
    return (
        <div className={SearchKlase.backColor}>
           <Knopf spausti="Help Center" />
        </div>
    )
};

export default subBottomHelp;

/* <SubHeaderBottomHelp/>*/