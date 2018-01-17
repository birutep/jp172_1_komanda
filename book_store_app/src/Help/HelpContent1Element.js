import React from 'react';
import help from './HelpContent1Element.css';


const HelpContent1Element = ( props ) => {
    return (
        <div className={help.books_help}>
              <div class="box1">
                  <h3>{props.pavadinimas}</h3>
                   <p>{props.turinys}</p>
             </div>
    
        </div>
    )
};

export default HelpContent1Element;
