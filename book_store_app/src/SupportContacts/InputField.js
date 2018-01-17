import React from 'react';
import inputField from './InputField.css';


const InputField = ( props ) => {
    return (
        <div className={inputField.books_support_contact}>
               <form>
               <p>{props.info}</p>
               <br/>
               <input type="text" placeholder={props.placeholder}/>
               </form>
        </div>
    )
};

export default InputField;
