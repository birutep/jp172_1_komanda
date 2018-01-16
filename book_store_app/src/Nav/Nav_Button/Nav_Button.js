import React from 'react';
import Nav_Button from './Nav_Button.css';

const Button = ( props ) => {
    return (
        <div className={Nav_Button.nav_buttons}>
            <i className={props.image} aria-hidden="true"></i>  {props.name}
        </div>
    )
};

export default Button;
