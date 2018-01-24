import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import SubBot from '../SubHeader/SubHeaderBottomBuyBooks/SubHeaderBottomBuyBooks';

import bookChart from '../data/chart.json';             //kintamasis krepseliui, laikysim tik id ir kieki
import allbooks from '../data/books.json';  

import Book from '../DivaiKnygomsAtvaizduot/DivKnyga2/DivKnyga2';

import Gridas from '../Grids/GridBuyBooks/GridBuyBooks';

//trys funkcijos kabinamos and divKnyga21 mygtuklu pridet, atimty ir pasalint, elementai skirtingi nezinau kaip jiem susibendraut, kad zinot kuris mygtukas iskviete, kad butentt a knyga prideti ar pasalint
const remove = () =>{
    console.log("as tureciau pasalinti sita knyga is buy listo, tik nezianu kas mane iskviete ir ka salint");
}
const increase = () =>{
    console.log("as tureciau prideti viena knyga prie tos rusies knygu kiekio krepselyje, bet nezinau kuris mygtukas mane iskviete ir kam pridet");
}
const decrease = () =>{
    console.log("as tureciau patikrint ar kiekis teigiamas jei taip atimti viena knyga prie tos rusies knygu kiekio krepselyje, bet nezinau kuris mygtukas mane iskviete ir is ko atimt");
}

const createBook = (x) => <Book key={x.id} img={x.img} author={x.author} name={x.krepselioTurinys} description={x.about} price={x.price} remove={remove} increase={increase} decrease={decrease} /> 
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
