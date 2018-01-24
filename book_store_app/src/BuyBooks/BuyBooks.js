import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import SubBot from '../SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';

import bookChart from '../data/books_buybooks_forTesting_bp.json';                 //kolkas imam ta pati jasona kaip ir visu knygu, imituodami kad krepsel;yje yra 10 knygu, atvaizdavimui ir logikai tikrinti
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga2/DivKnyga2';

import Gridas from '../Grids/GridBuyBooks/GridBuyBooks';

const createBook = (x) => <Book img={x.img} author={x.author} name={x.krepselioTurinys} description={x.about} price={x.price} /> 

const notFreeBooks =bookChart.filter(item => item.price >0);        //jei nemokama knyga kam jha pirkti?
const krepselioTurinys = notFreeBooks.map( x => createBook(x));     //sukuriam divukus
const getTotalPrice = () => notFreeBooks.reduce(function (acc, obj) { return acc + obj.price; }, 0);    //paskaiciuojam krepselio visu knygu kaina
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
