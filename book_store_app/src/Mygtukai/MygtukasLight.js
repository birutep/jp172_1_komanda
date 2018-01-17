import React from 'react';
import mygtukas from './Mygtukai.css';


const MygtukasLight = ( props ) => {
    return (
        <div className={mygtukas.buy_books_button_light}>
         {props.pavadinimas}
        </div>
    )
};



export default MygtukasLight;
