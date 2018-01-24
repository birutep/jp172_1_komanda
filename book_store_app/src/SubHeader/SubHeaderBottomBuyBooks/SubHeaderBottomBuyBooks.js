import React from 'react';
import SearchKlase from './SubHeaderBottomBuyBooks.css';
import Mygtukas from '../../Mygtukai/Mygtukas';
import mygtukoKlases from '../../Mygtukai/Mygtukai.css';
// import Mygtukas from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukas';
// import mygtukoKlases from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukai.css';

const subBottomHelp = ( props ) => { 
    return (
        <div className={SearchKlase.style}>
           <p className={SearchKlase.text_style}>Total price of your cart: <span>{props.price}</span> &#8364;</p>
           <Mygtukas pavadinimas="Buy" klase={mygtukoKlases.buy_books_button_dark_exp}/>
        </div>
        
    )
};

export default subBottomHelp;

// importui i App.js: import SubHeaderBottomBuyBooks from './SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';
// divui i App.js: <SubHeaderBottomBuyBooks/>
//