import React from 'react';
import cssKlases from './GridBrowseBooks.css';



const Browse = ( props ) => {
    return (
        <div className={cssKlases.books}>
            <div className={cssKlases.booksGridArea}>
                {props.elementai}
            </div>
        </div>
    )
};

export default Browse;