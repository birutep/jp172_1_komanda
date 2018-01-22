<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, {Component} from 'react';
>>>>>>> 996789eb4fdce4df470e3a1b22ae4458592f535e
import SubHeader from '../SubHeader/SubHeader';

import books from '../data/books.json';
import Book from '../DivaiKnygomsAtvaizduot/DivKnyga1/DivKnyga1';

import Gridas from '../Grids/GridBrowseBooks/GridBrowseBooks';
import SubheaderBottom from '../SubHeader/SubheaderBottom/SubheaderBottom';
<<<<<<< HEAD
=======

>>>>>>> 996789eb4fdce4df470e3a1b22ae4458592f535e

import { connect } from 'react-redux';  // importas norint prijungti bendrą saugyklą prie Component

import * as filterActions from '../store/filterActions';    // čia kaip Java enum. išvardini, kad nepadarytum rašymo klaidų jei pvz naudotum String


const createBook = (x) => <Book img={x.img} title={x.title} author={x.author} rating={x.rating} key={x.id}/>;
const free =  books.filter(el => el.price===0); 
const popular = books.filter(el => el.rating===5);
const lastest = books.slice(books.length-5, books.length);

const searched = books.filter((el) =>{      //kolkas iesko hard codinto Gee reik padaryt kad imtu inputa<-----------------------------
    let word = "Gee";
    return el.author.toLowerCase().indexOf(word.toLowerCase())!==-1 || el.title.toLowerCase().indexOf(word.toLowerCase())!== -1;
})

const allBooks = books.map(createBook);
const freeBooks = free.map(createBook);
const popularBooks = popular.map(createBook);
const newestBooks = lastest.map(createBook);
const searchedBooks = searched.map(createBook);

function switchFilter(act) {        // funkcija išrinkti kurias knygas grąžint.
    switch (act) {
        case filterActions.ALL_BOOKS:
            return allBooks;
        case filterActions.MOST_RECENT:
            return newestBooks;
        case filterActions.MOST_POPULAR:
            return popularBooks;
        case filterActions.FREE_BOOKS:
            return freeBooks;
        case filterActions.SEARCHED_BOOKS:
            return searchedBooks;
        default:
            return allBooks;
    }
}


class Browse extends Component {

    render () {
        const books = switchFilter(this.props.fltr);     // books yra masyvas knygų pagal užklausą

        return (
            <div>
                <SubHeader name="Browse"/>
                <SubheaderBottom />
                <Gridas elementai={books} />
            </div>
        )
    };
}

<<<<<<< HEAD
const mapStateToProps = state => {      // funkcija kuri perkopijuoja state iš bendros saugyklos į vietinį props
                                        // (galima prie "fltr: state.filter" pridėt daugiau kintamųjų, jeigu jų būtų reducer.js)
    return {
        fltr: state.filter
    };
=======
const Browse = ( props ) => {
    return (
        <div>
            <SubHeader name ="Browse" />
            <SubheaderBottom />
            <Gridas elementai={freeBooks}/>
        </div>
    )
>>>>>>> 996789eb4fdce4df470e3a1b22ae4458592f535e
};

export default connect(mapStateToProps) (Browse);   // prijungia funkcijas mapStateToProps prie komponento
