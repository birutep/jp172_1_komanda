var bookDisplayArea = document.getElementById("books_scrollbar-style");

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
        "IMG/books_book_01.jpg",
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
        "IMG/books_book_02.jpg",
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
        "IMG/books_book_03.jpg",
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
        "IMG/books_book_04.jpg",
        4.0,
        100,
    ),
    new Book(
        "Chrissy Gower",
        "Pale Slow Cooking",
        2010,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "005",
        9.52,
        "IMG/books_book_05.jpg",
        4.5,
        100,
    ),
    new Book(
        "Tobie Puttock",
        "Cook Like Italian",
        2000,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "006",
        9.52,
        "IMG/books_book_06.jpg",
        4.0,
        100,
    ),
    new Book(
        "Geeta Devi",
        "Suneeta Vaswani",
        2016,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "007",
        9.52,
        "IMG/books_book_07.jpg",
        5.0,
        100,
    ),
    new Book(
        "Jamie Oliver",
        "Jamie Does",
        1997,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "008",
        9.52,
        "IMG/books_book_08.jpg",
        4.0,
        100,
    ),
    new Book(
        "Jamie Oliver",
        "Jamie's Italy",
        2017,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "009",
        7.80,
        "IMG/books_book_09.jpg",
        5.0,
        100,
    ),
    new Book(
        "Matthew Biggs",
        "Vegetables Cookbook",
        2015,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "010",
        4.19,
        "IMG/books_book_10.jpg",
        3.5,
        100,
    ),
];

//perduodi knyga, grazina diva tinklapiui browse books
function getBookDiv(book){
    return "<div class=\"books_box\"><img src="+book.img+" alt=\"book\"><h3>"+book.title+"</h3><p>by "+book.author+"</p><span class=\"books_rating-static books_rating-"+book.rating*10+"\"></span></div>";
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