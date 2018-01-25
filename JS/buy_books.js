 var bookDisplayArea = document.getElementById("books_scrollbar_style");
 //var bookDisplayArea = document.getElementById("insert_from_buy_books_js");

 //kintamasis laukeliui pasirinktos knygos kiekiui
 var countOfPlaceholder = 0;

 //Naudosime funkcijojse function buy_books_amount_up() ir function buy_books_amount_down()
 var placeholder = document.getElementsByClassName("buy_books_amount_input");

 //bendra visu knygu suma
 var sumOfAllBooks = 0;

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
     return "<div class=\"books_box\"><div class=\"buy_books_box_book_img\"><img src="+book.img+"alt=\"book\"></div><div class=\"buy_books_box_book_about\"><h3>" + book.title + "</h3><p>by " + book.author + "<p class=\"buy_books_box_book_summary\">" + book.about + "</p></div> <div class=\"buy_books_box_book_amount\"><input class=\"buy_books_amount_button_change_amount\" type=\"button\" value=\"-\" onclick=\"buy_books_amount_down()\"><input type=\"text\" class=\"buy_books_amount_input\" placeholder=\"0\" /><input class=\"buy_books_amount_button_change_amount\" type=\"button\" value=\"+\" onclick=\"buy_books_amount_up()\"><img class=\"buy_books_box_book_amount_recyclebin\" src=\"../IMG/buy_books_recyclebin.jpg\" alt=\"recyclebin\" onclick=\"buy_books_amount_remove()\"></div></div>";
 }

 //perbega per viska knygu masyva ir isveda visas knygas, buy books dalis
 function showBoughtBooks() {
     bookDisplayArea.innerHTML = "";
     for (x in books) {
         bookDisplayArea.innerHTML += getBookDiv(books[x]);
     }
 }

 //funkcija, kuri padidina placeholder[0] laukeli vienetu paspaudus "+" ir prideda knygos kaina i bendra suma. Veliau reikes patobulinti,
 // kad laukelio reiksme kaeistusi priklausomai nuo to, ties kuria knyga paspaustas '+' mygtukas.
 //Gal but reiketu prideti checkbox ties kiekviena knyga.
 function buy_books_amount_up() {
     sumOfAllBooks += books[0].price;
     alert(sumOfAllBooks);
     countOfPlaceholder++;
     placeholder[0].placeholder = countOfPlaceholder
 };


 //funkcija, kuri sumazina placeholder[0] laukeli vienetu paspaudus "-" ir atima knygos kaina is bendros sumos. Jeigu placeholder=0,
 // nemazins. Veliau reikes patobulinti,
 // kad laukelio reiksme kaeistusi priklausomai nuo to, ties kuria knyga paspaustas '-' mygtukas.
 //Gal but reiketu prideti checkbox ties kiekviena knyga.
 function buy_books_amount_down() {
     if (countOfPlaceholder > 0) {
         sumOfAllBooks -= books[0].price;
         alert(sumOfAllBooks);
         countOfPlaceholder--;
         placeholder[0].placeholder = countOfPlaceholder
     }
 };




 //kad uzkrautu visas knygas kai uzsikrauna tinklapis, ja daar kabint and daniel dalies mygtuko all books
 //perasyt analogiuskas funkcijas, tik kurios ziuretu pagal filtrus ir isvestu tik filtrus atitinkaancias
 document.body.onload = showBoughtBooks();