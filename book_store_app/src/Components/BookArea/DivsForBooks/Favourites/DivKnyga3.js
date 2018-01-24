import React from 'react';
import cssKlases from './DivKnyga3.css';

import Mygtukas from '../../../../Mygtukai/Mygtukas';
import mygtukoKlases from '../../../../Mygtukai/Mygtukai.css';

const knyga3 = ( props ) => {
    return (
        <div className={cssKlases.wishlist_box}>
            <div className={cssKlases.wishlist_box_book_img}>
                <img src={props.img} alt="book" />
            </div>

            <div className={cssKlases.wishlist_box_book_about}>
                <h3>{props.name}</h3>
                <p>by {props.author}</p>
                <p className={cssKlases.wishlist_box_book_summary}>{props.description}</p>
            </div>

            <div className={cssKlases.wishlist_box_book_price_action}>
                <div>
                    <p>&#8364; per book: <span>{props.price}</span></p>
                </div>
                <div>
                    <Mygtukas pavadinimas="Add to wishlist" klase={mygtukoKlases.buy_books_button_light_small} click={props.toWhish}/>
                    <Mygtukas pavadinimas="Add to buylist" klase={mygtukoKlases.buy_books_button_dark_small} click={props.toBuy}/>
                </div>
            </div>
        </div>

    )
};

export default knyga3;


//norint paze App.js faile imetam virsuje
//import Knyga from './DivaiKnygomsAtvaizduot/DivKnyga3/DivKnyga3';

//o returne 

// <Knyga img="IMG/books_book_01.jpg" author="Laima Valuze" name="Programavimas kitu kampu" description="cia bus ilgas ilgas description" price="25" />
// <Knyga img="IMG/books_book_07.jpg" author="Daniel Rozov" name="Node js instaliavimas" description="cia bus ilgas ilgas description" price="0" /> 
