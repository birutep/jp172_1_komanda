import React from 'react';
import textareaField from './TextareaField.css';


const TextareaField = ( props ) => {
    return (
        <div className={textareaField.inputField}>
               <form>
               <p>{props.info}</p>
               <br/>
               <textarea placeholder={props.placeholder}></textarea>
               </form>
        </div>
    )
};



export default TextareaField;
