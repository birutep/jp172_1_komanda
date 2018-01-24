import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import SubBot from '../SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';

import bookChart from '../data/books_buybooks_forTesting_bp.json';                 //kolkas imam ta pati jasona kaip ir visu knygu, imituodami kad krepsel;yje yra 10 knygu, atvaizdavimui ir logikai tikrinti
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga2/DivKnyga2';

import Gridas from '../Grids/GridBuyBooks/GridBuyBooks';

const createBook = (x) => <Book img={x.img} author={x.author} name={x.krepselioTurinys} description={x.about} price={x.price} /> 
const krepselioTurinys = bookChart.map( x => createBook(x));

const BuyBooks = ( props ) => {
    return (
        <div>
            <SubHeader name="Buy Books" />
            <SubBot />  
            <Gridas elementai={krepselioTurinys} />
        </div>
    )
};

export default BuyBooks;
