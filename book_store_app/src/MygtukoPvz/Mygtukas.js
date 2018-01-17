import React from 'react';
import mygtukoKlases from './Mygtukas.css';


const mygtukas = ( props ) => {
    return (
        <div className={mygtukoKlases.mygtukas}>
           As esu {props.pavadinimas}
        </div>
        
    )
};



export default mygtukas;
