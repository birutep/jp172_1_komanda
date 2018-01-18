var bookDisplayArea = document.getElementById("books_scrollbar_style");

function Book(
    author,
    title,
    year,
    about,
    id,
    price,
    img,
    rating,
    count,
 
){
    this.author=author;
    this.title=title;
    this.year=year;
    this.about=about;
    this.id=id;
    this.price=price;
    this.img=img;
    this.rating=rating;
    this.count=count;
   
}

var books =[
    new Book(
        "Geeta Devi",
        "Jewels of Nizam",
        1997,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "001",
        9.52,
        "../IMG/books_book_01.jpg",
        5.0,
        100,
    ),
    new Book(
        "Senjeev Kapoor",
        "Cakes & Bakes",
        2004,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "002",
        12.20,
        "../IMG/books_book_02.jpg",
        5.0,
        100,
    ),
    new Book(
        "Jamie Oliver",
        "Jamie's Kitchen",
        2017,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "003",
        9.52,
        "../IMG/books_book_03.jpg",
        4.5,
        100,
    ),
    new Book(
        "Simon Holst",
        "Inexpencive Family Meals",
        2012,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "004",
        9.52,
        "../IMG/books_book_04.jpg",
        4.0,
        100,
    ),
    new Book(
        "Matthew Biggs",
        "Vegetables Cookbook",
        2015,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "010",
        4.19,
        "../IMG/books_book_10.jpg",
        3.5,
        100,
    ),
];

//perduodi knyga, grazina diva tinklapiui browse books
function getBookDiv(book){
    return "<div class=\"books_box\" class=\"buy_books_box_book_img\"><img src="+book.img+" alt=\"book\"><h3>"+book.title+"</h3><p>by "+book.author+"</p><span class=\"books_rating_static books_rating_"+book.rating*10+"\"></span></div>";
}

//perbega per viska knygu masyva ir isveda visas knygas, browse books dalis
function showAll(){
    bookDisplayArea.innerHTML="";
    for(x in books){
        bookDisplayArea.innerHTML+=getBookDiv(books[x]);
    }
}

//kad uzkrautu visas knygas kai uzsikrauna tinklapis, ja daar kabint and daniel dalies mygtuko all books
//perasyt analogiuskas funkcijas, tik kurios ziuretu pagal filtrus ir isvestu tik filtrus atitinkaancias
document.body.onload=showAll();