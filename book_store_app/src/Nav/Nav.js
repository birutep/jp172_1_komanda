import React from 'react';
import Nav_Button from './Nav_Button/Nav_Button';
import Nav_Style from './Nav.css';

const Nav = ( props ) => {
    return (
        <div className={Nav_Style.nav}>
            <Nav_Button image="fa fa-globe" name="Browse" />
            <Nav_Button image="fa fa-shopping-cart" name="Buy Books" />
            <Nav_Button image="fa fa-star" name="Favourite Books" />
            <Nav_Button image="fa fa-th-list" name="Wishlist" />
        </div>
    )
};

export default Nav;
