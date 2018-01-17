import React from 'react';
import NavButton from './Nav_Button/Nav_Button';
import Nav_Style from './Nav.css';
import { Link } from 'react-router-dom'

// clickHandler = () => {
//     this.props.history.push('/footer');
// };

const Nav = ( props ) => {
    return (
        <div className={Nav_Style.nav}>
            <Link to='/'><NavButton image="fa fa-globe" name="Browse" /></Link>
            <Link to='/mygtukas'><NavButton image="fa fa-shopping-cart" name="Buy Books" /></Link>
            <Link to='/bendras'><NavButton image="fa fa-star" name="Favourite Books" /></Link>
            <NavButton image="fa fa-th-list" name="Wishlist" />
        </div>
    )
};

export default Nav;
