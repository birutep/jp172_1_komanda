import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import SubBot from '../SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';

import bookChart from '../data/chart.json';             //kintamasis krepseliui, laikysim tik id ir kieki
import allbooks from '../data/books.json';  

import Book from '../DivaiKnygomsAtvaizduot/DivKnyga2/DivKnyga2';

import Gridas from '../Grids/GridBuyBooks/GridBuyBooks';

const createBook = (x) => <Book img={x.img} author={x.author} name={x.krepselioTurinys} description={x.about} price={x.price} /> 
//nurodai knygos indeksa, is visu turimu knygu randa ir grazina knyga, nes krepselyje saugosim tik indeksus ir kieki
const getBookById = (bookid) =>{        
     const book = allbooks.filter((item) => item.id==bookid);
     return book[0];
}
//bega per krepseli ima id ir pagal id vis prideda knyga, krepselio turinys tampa divu su knygom krepselyje rinkiniu
const krepselioTurinys = bookChart.map( x => createBook(getBookById(x.id)));   
const getTotalPrice = () => {
    let sum =0;
    for(let i= 0; i<bookChart.length; i++){
        let book = getBookById(bookChart[i].id);
        sum+= (book.price * bookChart[i].count);
    }
    return sum.toFixed(2);
}
const BuyBooks = ( props ) => {
    return (
        <div>
            <SubHeader name="Buy Books" />
            <SubBot price={getTotalPrice()} />  
            <Gridas elementai={krepselioTurinys} />
        </div>
    )
};

export default BuyBooks;
