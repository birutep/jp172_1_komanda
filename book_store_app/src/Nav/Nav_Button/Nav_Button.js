import React from 'react';
import NavButton from './Nav_Button.css';



const Button = ( props ) => {
    return (
        <div className={NavButton.nav_buttons}>
            <i className={props.image} aria-hidden="true" />  {props.name}
        </div>
    )
};

export default Button;
