import React from 'react';
import knopfKlase from './Knopf.css';


<<<<<<< HEAD
const Knopfs = (props) => (
    <div className={knopfKlase.knopf} onClick={props.onClick}>  
        {props.spausti} 
    </div>                          // onClick kviečia tėvo onClick
);
=======
const Knopfs = ( props ) => {
    return (
        <div className={knopfKlase.knopf} onClick={props.clickHandler}>
            {props.spausti}
        </div>
        
        
    )
};
>>>>>>> 996789eb4fdce4df470e3a1b22ae4458592f535e

export default Knopfs;
