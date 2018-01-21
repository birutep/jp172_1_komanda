import React from 'react';
import headerioKlase from './SubHeader.css';

const sub = ( props ) => { 
    return (
        <div className={headerioKlase.book_filter}>
           <div><p className={headerioKlase.book_filter_p} >{props.name}</p></div>
           <div className={headerioKlase.apatine} />
        </div>
    )
};

export default sub;

//App.js divui; <SubHeader name="Wishlist"></SubHeader>
//App.js importui: import SubHeader from './SubHeader/SubHeader';