import React from 'react';
import headerioKlase from './SubHeader.css';

const sub = ( props ) => { 
    return (
        <div className={headerioKlase.book_filter}>
           <p className={headerioKlase.book_filter_p} >{props.name}</p>
           <div className={headerioKlase.apatine} ></div> 
        </div>
    )
};

export default sub;