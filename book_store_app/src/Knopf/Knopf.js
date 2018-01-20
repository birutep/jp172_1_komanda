import React from 'react';
import knopfKlase from './Knopf.css';


const Knopfs = (props) => (
    <div className={knopfKlase.knopf} onClick={props.onClick}>  
        {props.spausti} 
    </div>                          // onClick kviečia tėvo onClick
);

export default Knopfs;
