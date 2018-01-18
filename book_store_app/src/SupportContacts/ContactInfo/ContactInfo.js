import React from 'react';
import contacts from './ContactInfo.css';


const ContactInfo = ( props ) => {
    return (
        <div className={contacts.contacts}>
              <div>
                   <p>DreamTeam</p>
                   <p>Department of Energy and Mechatronics</p>
                   <p>Phone. +370 5 233322, + 370 656 233322</p>
                   <p>Written by Dream Team.</p>
                   <p>Kalvarijų g. 159, Vilnius | 204 room</p>
             </div>
    
        </div>
    )
};

export default ContactInfo;
