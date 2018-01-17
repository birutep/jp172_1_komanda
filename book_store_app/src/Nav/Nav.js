import React from 'react';
import NavButton from './Nav_Button/Nav_Button';
import Nav_Style from './Nav.css';
import { Link } from 'react-router-dom';

// clickHandler = () => {
//     this.props.history.push('/footer');
// };

const Nav = ( props ) => {
    return (
        <div className={Nav_Style.nav}>
            <Link to='/'><NavButton image="fa fa-globe" name="Browse" /></Link>
            <Link to='/buy_books'><NavButton image="fa fa-shopping-cart" name="Buy Books" /></Link>
            <Link to='/favourite_books'><NavButton image="fa fa-star" name="Favourite Books" /></Link>
            <Link to='/wishlist'><NavButton image="fa fa-th-list" name="Wishlist" /></Link>
        </div>
    )
};

export default Nav;
