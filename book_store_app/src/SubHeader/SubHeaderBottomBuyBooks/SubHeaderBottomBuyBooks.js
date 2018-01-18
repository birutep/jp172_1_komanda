import React from 'react';
import SearchKlase from './SubHeaderBottomBuyBooks.css';

// import Mygtukas from './Mygtukai/Mygtukas';
// import mygtukoKlases from './Mygtukai/Mygtukai.css';

import Mygtukas from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukas';
import mygtukoKlases from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukai.css';

const subBottomHelp = ( props ) => { 
    return (
        <div className={SearchKlase.style}>
        <div>
           <p className={SearchKlase.text_style}>Total price of your cart: <span>500</span> &#8364;</p>
           <Mygtukas pavadinimas="Buy" klase={mygtukoKlases.buy_books_button_dark}/>
        </div>
        </div>
        
    )
};

export default subBottomHelp;

// <div>
        //             <Mygtukas pavadinimas="Remove from wishlist" klase={mygtukoKlases.buy_books_button_dark_small}/>
        //             <Mygtukas pavadinimas="Add to buy list" klase={mygtukoKlases.buy_books_button_light_small}/>
        //         </div>