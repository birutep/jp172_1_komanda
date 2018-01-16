import React from 'react';
import headerioKlase from './SubHeader.css';

const sub = ( props ) => { //sicia props nepanaudota, bet reliaia cia masyvas su viskuo ka perduodame ka rasom pvz <Footeris vardas="kazkoks" kaina="15">, tuomet sicia galiam paimt per props.vardas props.kaina
    return (
        <div className={headerioKlase.test}>
           Labas!
        </div>
    )
};

export default sub;