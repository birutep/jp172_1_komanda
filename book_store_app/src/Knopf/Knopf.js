import React from 'react';
import knopfKlase from './Knopf.css';


const Knopfs = ( props ) => {
    return (
        <div className={knopfKlase.knopf}>
            {props.parsas}
        </div>
        
        
    )
};

export default Knopfs;