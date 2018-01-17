import React from 'react';

const Mygtukas = ( props ) => {
    return (
        <div className={props.klase}>
         {props.pavadinimas}
        </div>
    )
};



export default Mygtukas;
