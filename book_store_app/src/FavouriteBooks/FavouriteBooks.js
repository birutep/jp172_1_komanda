import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import books from '../data/books.json';             //kolkas viskas is to paties jasono
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga3/DivKnyga3';

import Gridas from '../Grids/GridBuyBooks/GridBuyBooks';
import SubheaderBottom from '../SubHeader/SubheaderBottom/SubheaderBottom';

const createBook = (x) => <Book img={x.img} author={x.author} name={x.title} description={x.about} price={x.price} />;
const allFavorites = books.map(createBook);

const FavouriteBooks = ( props ) => {
    return (
        <div>
            <SubHeader name="Favorites"/>
            <SubheaderBottom />
            <Gridas elementai={allFavorites} />
        </div>
    )
};

export default FavouriteBooks;
