import React from 'react';
import cssKlases from './DivKnyga1.css';
import Zvaigzdutes from './Zvaigzdutes/Zvaigzdutes';


const knyga1 = ( props ) => {
    return (
        <div className={cssKlases.oranzine}>
           <img src={props.img} alt="book" />
           <h3>{props.title}</h3>
           <p>by {props.author}</p>
           <Zvaigzdutes rating={props.rating} spalva={cssKlases.oranzine}/>
        </div>
    )
};

export default knyga1;


//norint paze App.js faile imetam virsuje
//import Knyga1 from '.DivaiKnygomsAtvaizduot/DivKnyga1/DivKnyga1';

//o returne 

//<Knyga1 img="IMG/books_book_01.jpg" title="20 budu issivirti koldunams" author="Aurimas Cincikas" rating="5"/>
//<Knyga1 img="IMG/books_book_02.jpg" title="Pratimai rankai" author="Jurgis Sidlauksas" rating="2.5"/>
