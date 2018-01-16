import React from 'react';
import mygtukas from './Mygtukai.css';


const MygtukasLightSmall = ( props ) => {
    return (
        <div className={mygtukas.buy_books_button_light_small}>
         {props.pavadinimas}
        </div>
    )
};



export default MygtukasLightSmall;
