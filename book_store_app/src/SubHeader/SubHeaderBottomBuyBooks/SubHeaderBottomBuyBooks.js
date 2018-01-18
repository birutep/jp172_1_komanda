import React from 'react';
import SearchKlase from './SubHeaderBottomBuyBooks.css';
import Button from '../../Mygtukai/MygtukasDark';

const subBottomHelp = ( props ) => { 
    return (
        <div className={SearchKlase.backColor}>
           <p>Total price of your cart: <span>500</span> &#8364;</p>
           <Button pavadiimas="Buy"></Button>
        </div>
    )
};

export default subBottomHelp;