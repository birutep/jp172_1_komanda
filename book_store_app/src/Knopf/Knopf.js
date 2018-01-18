import React from 'react';
import knopfKlase from './Knopf.css';


const Knopfs = ( props ) => {
    return (
        <div className={knopfKlase.knopf} onClick={props.clickHandler}>
            {props.spausti}
        </div>
        
        
    )
};

export default Knopfs;


// {/* <Knopf spausti="All books"></Knopf>
//         <Knopf spausti="Most Recent"></Knopf>
//         <Knopf spausti="Most Popular"></Knopf>
//         <Knopf spausti="Free Books"></Knopf>
//         <Search></Search> */}