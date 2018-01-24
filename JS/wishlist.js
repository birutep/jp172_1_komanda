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

) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.about = about;
    this.id = id;
    this.price = price;
    this.img = img;
    this.rating = rating;
    this.count = count;

}

var books = [
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

//perduodi knyga, grazina diva tinklapiui buy books
function getBookDiv(book) {
    return "<div class=\"wishlist_box\"> <div class=\"wishlist_box_book_img\"><img src="+book.img+" alt=\"book\"></div> <div class=\"wishlist_box_book_about\"><h3>"+book.title+"</h3><p>by"+book.author+"</p><p class=\"wishlist_box_book_summary\">"+book.about+"</p></div> <div class=\"wishlist_box_book_price_action\"><div><p>&#8364; per book: <span>"+book.price+"</span></p></div></div><div> <input class=\"wishlist_button_remove_from_wishlist\" type=\"button\" value=\"Remove from wishlist\" onclick=\"wishlist_remove()\"> <input class=\"wishlist_button_add_to_buy_list\" type=\"button\" value=\"Add to buy list\" onclick=\"wishlist_buy()\"></div></div>"}

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