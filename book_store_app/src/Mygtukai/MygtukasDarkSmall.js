import React from 'react';
import mygtukas from './Mygtukai.css';


const MygtukasDarkSmall = ( props ) => {
    return (
        <div className={mygtukas.buy_books_button_dark_small}>
         {props.pavadinimas}
        </div>
    )
};



export default MygtukasDarkSmall;
