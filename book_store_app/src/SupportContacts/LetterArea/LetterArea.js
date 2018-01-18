import React from 'react';
import area from './LetterArea.css';
import InputField from '../InputField/InputField';
import TextareaField from '../Textarea/TextareaField';

const LetterArea = ( props ) => {
    return (
        <div className={area.letterArea}>
                     <InputField info="First Name" placeholder="Your Name"></InputField>
                     <InputField info="Last Name" placeholder="Your Name"></InputField>
                     <InputField info="E-mail:" placeholder="Your Name"></InputField>
                     <InputField info="Country" placeholder="Your Name"></InputField>
                     <TextareaField info="Your message for us" placeholder="Type here..."></TextareaField>
        </div>
    )
};

export default LetterArea;
