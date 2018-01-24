import React from 'react';
import WishKlase from './SubHeaderBottomWishList.css';
import Mygtukas from '../../Mygtukai/Mygtukas';
import mygtukoKlases from '../../Mygtukai/Mygtukai.css';
// import Mygtukas from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukas';
// import mygtukoKlases from '../../DivaiKnygomsAtvaizduot/DivKnyga3/Mygtukai/Mygtukai.css';

const subBottomWish = ( props ) => { 
    return (
        <div className={WishKlase.style}>
           {/* <Mygtukas pavadinimas="Clear wishlist" klase={mygtukoKlases.buy_books_button_light}/> */}
           {/* <Mygtukas pavadinimas="Add all to wishlist" klase={mygtukoKlases.buy_books_button_dark  */}
           <Mygtukas pavadinimas="Clear wishlist" klase={mygtukoKlases.buy_books_button_light_SubHeaderBottomWishList}/>
           <Mygtukas pavadinimas="Add all to wishlist" klase={mygtukoKlases.buy_books_button_dark_SubHeaderBottomWishList}/>
        
        </div>
        
    )
};

export default subBottomWish;

// App.js divui: <SubHeaderBottomWishList/>

//App.js importui: import SubHeaderBottomWishList from './SubHeader/SubHeaderBottomWishList/SubHeaderBottomWishList';
