import React from 'react';
import help from './HelpContent1Element.css';


const HelpContent1Element = ( props ) => {
    return (
        <div className={help.books_help}>
              <div className="box1">
                  <h3>{props.name}</h3>
                   <p>{props.content}</p>
             </div>
    
        </div>
    )
};

export default HelpContent1Element;
