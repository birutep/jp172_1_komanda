import React from 'react';
import area from './LetterArea.css';
import InputField from '../InputField/InputField';
import TextareaField from '../Textarea/TextareaField';

const LetterArea = (props) => {
    return (
        <div className={area.letterArea}>
            <InputField info="First Name" placeholder="Your First Name" />
            <InputField info="Last Name" placeholder="Your Last Name" />
            <InputField info="E-mail:" placeholder="Your E-mail" />
            <InputField info="Country" placeholder="Your Country" />
            <TextareaField info="Your message for us" placeholder="Type here..." />
        </div>
    )
};

export default LetterArea;
