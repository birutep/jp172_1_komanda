import React from 'react';
import mygtukas from './Mygtukai.css';


const MygtukasDark = ( props ) => {
    return (
        <div className={mygtukas.buy_books_button_dark}>
         {props.pavadinimas}
        </div>
    )
};



export default MygtukasDark;
