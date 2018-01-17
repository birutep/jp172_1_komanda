import React from 'react';
import headerioKlase from './SubHeader.css';

const sub = ( props ) => { 
    return (
        <div className={headerioKlase.book_filter}>
           <p className={headerioKlase.book_filter_p} >Browse Available Books</p>
        </div>
    )
};

export default sub;