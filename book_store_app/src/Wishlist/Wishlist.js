import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import books from '../data/books.json';   
import whisBooks from '../data/whishlist.json'        
import Book from '../Components/BookArea/DivsForBooks/Wishlist/DivKnyga4';

import Gridas from '../Components/BookArea/GridContainers/Wishlist/GridWhishlist';
import SubheaderBottom from '../SubHeader/SubHeaderBottomWishList/SubHeaderBottomWishList';

const pridedam = () => {
    console.log("turiu pridet knyga i whishlista bet nezinau kuria");
}
const atimam = () => {
    console.log("turiu pridet knyga i buylista bet nezinau kuria");
}

const createBook = (x) => <Book key={x.id} img={x.img} author={x.author} name={x.title} description={x.about} price={x.price} add={pridedam} remove={atimam} />;
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
