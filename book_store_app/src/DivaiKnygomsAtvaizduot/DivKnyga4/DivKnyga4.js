import React from 'react';
import cssKlases from './DivKnyga4.css';

import Mygtukas from './../DivKnyga3/Mygtukai/Mygtukas';
import mygtukoKlases from './../DivKnyga3/Mygtukai/Mygtukai.css';


const knyga3 = ( props ) => {
    return (
        <div className={cssKlases.box}>

            <div className={cssKlases.img}>
                <img src={props.img} alt="book" />
             </div>

            <div className={cssKlases.about_price_action}>
                <div className={cssKlases.about}>
                    <h3>{props.name}</h3>
                    <p>by {props.author}</p>
                    <p className={cssKlases.summary}>{props.description}</p>
                </div>

                <div className={cssKlases.price_action}>
                    <p>Price: &#8364;<span>{props.price}</span></p>
                    <Mygtukas pavadinimas="Remove from wishlist" klase={mygtukoKlases.buy_books_button_dark}/>
                    <Mygtukas pavadinimas="Add to buy list" klase={mygtukoKlases.buy_books_button_light}/>
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
