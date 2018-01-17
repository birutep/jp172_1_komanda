import React from 'react';
import inputFieldTextarea from './InputFieldTextarea.css';


const InputFieldTextarea = ( props ) => {
    return (
        <div className={inputFieldTextarea.books_support_contact}>
               <form>
               <p>{props.info}</p>
               <br/>
               <input type="textarea" placeholder={props.placeholder}/>
               </form>
        </div>
    )
};

export default InputFieldTextarea;
