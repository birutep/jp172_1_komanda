import React from 'react';
import cssKlases from './DivKnyga2.css';


const knyga2 = ( props ) => {
    return (
        <div className={cssKlases.buy_books_box}>
            <div className={cssKlases.buy_books_box_book_img}>
                <img src={props.img} alt="book" />
            </div>
            <div className={cssKlases.buy_books_box_book_about}>
                <h3>{props.name}</h3>
                <p>by {props.author}</p>
                <p className={cssKlases.buy_books_box_book_summary}>{props.description}</p>
            </div>
            <div className={cssKlases.buy_books_box_book_amount}>
                <input className={cssKlases.buy_books_amount_button_change_amount} type="button" value="-" onclick="buy_books_amount_down()" />
                <input type="text" className={cssKlases.buy_books_amount_input} placeholder="0" />
                <input className={cssKlases.buy_books_amount_button_change_amount} type="button" value="+" onclick="buy_books_amount_up()" />
                <img className={cssKlases.buy_books_box_book_amount_recyclebin} src="./IMG/buy_books_recyclebin.jpg" alt="recyclebin" onclick="buy_books_amount_remove()" />
            </div>
                <div className={cssKlases.buy_books_box_book_price}>
                    <p>&#8364; per book: <span>{props.price}</span></p>
                </div>
        </div>

    )
};

export default knyga2;


//norint paze App.js faile imetam virsuje
//import Knyga from './DivaiKnygomsAtvaizduot/DivKnyga2/DivKnyga2';

//o returne 

// <Knyga img="IMG/books_book_01.jpg" author="Laima Valuze" name="Programavimas kitu kampu" description="cia bus ilgas ilgas description" price="25" />
// <Knyga img="IMG/books_book_07.jpg" author="Daniel Rozov" name="Node js instaliavimas" description="cia bus ilgas ilgas description" price="0" /> 
