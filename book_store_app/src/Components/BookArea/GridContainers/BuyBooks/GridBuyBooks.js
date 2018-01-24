import React from 'react';
import cssKlases from './GridBuyBooks.css';



const Browse = ( props ) => {
    return (
        <div className={cssKlases.books}>
            <div className={cssKlases.books_area}>
                <div className={cssKlases.booksGridArea}>
                {props.elementai}
                </div>
            </div>
        </div>
    )
};

export default Browse;
