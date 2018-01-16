import React from 'react';
import cssKlases from './DivKnyga1.css';


const knyga1 = ( props ) => {
    return (
        <div className={cssKlases.books_box}>
           <img src={props.img} alt="book" />
           <h3>{props.title}</h3>
           <p>by {props.author}</p>
           <span className={"books_rating_static books_rating_" + (+props.rating*10)}></span>
        </div>
    )
};

export default knyga1;
