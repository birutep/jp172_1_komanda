import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import books from '../data/books.json';   
import favBooks from '../data/favorites.json';            
import Book from '../Components/BookArea/DivsForBooks/Favourites/DivKnyga3';

import Gridas from '../Components/BookArea/GridContainers/BuyBooks/GridBuyBooks';
import SubheaderBottom from '../SubHeader/SubheaderBottom/SubheaderBottom';


const fromWhishlist =() =>{
    console.log("tureciau sia knyga idet i whishlista, bet nezinau kuri is knygu paspausta")
}
const toBuyList =() =>{
    console.log("tureciau sia knyga idet i buylista, bet nezinau kuri is knygu paspausta")
}

const createBook = (x) => <Book key={x.id}img={x.img} author={x.author} name={x.title} description={x.about} price={x.price} toWhish={fromWhishlist} toBuy={toBuyList}/>;
//nurodai knygos indeksa, is visu turimu knygu randa ir grazina knyga, nes krepselyje saugosim tik indeksus ir kieki
const getBookById = (bookid) =>{        
     const book = books.filter((item) => item.id==bookid);
     return book[0];
}

//bega per krepseli ima id ir pagal id vis prideda knyga, krepselio turinys tampa divu su knygom krepselyje rinkiniu
const favs = favBooks.map( x => createBook(getBookById(x.id)));   


const FavouriteBooks = ( props ) => {
    return (
        <div>
            <SubHeader name="Favorites"/>
            <SubheaderBottom />
            <Gridas elementai={favs} />
        </div>
    )
};

export default FavouriteBooks;
