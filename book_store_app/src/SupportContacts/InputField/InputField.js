import React from 'react';
import inputField from './InputField.css';


const InputField = (props) => {
    return (
        <div className={inputField.inputField}>
            <form>
                <p>{props.info}</p>
                <br/>
                <input type="text" placeholder={props.placeholder}/>
            </form>
        </div>
    )
};

export default InputField;
