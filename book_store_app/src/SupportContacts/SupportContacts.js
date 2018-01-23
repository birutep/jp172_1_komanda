import React from 'react';
import element from './SupportContacts.css';
import LetterArea from './LetterArea/LetterArea';
import ContactInfo from './ContactInfo/ContactInfo';

const SupportContacts = (props) => {
    return (
        <div className={element.area}>
            <LetterArea />
            <ContactInfo />
        </div>
    )
};

export default SupportContacts;
