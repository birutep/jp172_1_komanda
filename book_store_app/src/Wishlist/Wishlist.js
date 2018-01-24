import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import books from '../data/books.json';             //kolkas viskas is to paties jasono
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga4/DivKnyga4';

import Gridas from '../Grids/GridWhishlist/GridWhishlist';
import SubheaderBottom from '../SubHeader/SubHeaderBottomWishList/SubHeaderBottomWishList';

const createBook = (x) => <Book img={x.img} author={x.author} name={x.title} description={x.about} price={x.price} />;
const whishlist = books.map(createBook);

const Wishlist = ( props ) => {
    return (
        <div>
            <SubHeader name="Whishlist"/>
            <SubheaderBottom />
            <Gridas elementai={whishlist} />
        </div>
    )
};

export default Wishlist;
