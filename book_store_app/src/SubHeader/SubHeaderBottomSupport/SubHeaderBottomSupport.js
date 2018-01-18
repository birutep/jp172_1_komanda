import React from 'react';
import Knopf from '../../Knopf/Knopf';
import SearchKlase from './SubHeaderBottomSupport.css';

const subBottomSupport = ( props ) => { 
    return (
        <div className={SearchKlase.backColor}>
           <Knopf spausti="Contacts"></Knopf>
        </div>
    )
};

export default subBottomSupport;


/*<SubHeaderBottomSupport/> */