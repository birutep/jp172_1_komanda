import React from 'react';
import knopfKlase from './Knopf.css';


const Knopfs = ( props ) => {
    return (
        <div className={knopfKlase.knopf}>
           All Books {props.knopf}
        </div>
        
        
    )
};

export default Knopfs;