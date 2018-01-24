import React from 'react';

const Mygtukas = ( props ) => {
    return (
        <div className={props.klase} onClick={props.click}>
         {props.pavadinimas}
        </div>
    )
};



export default Mygtukas;
