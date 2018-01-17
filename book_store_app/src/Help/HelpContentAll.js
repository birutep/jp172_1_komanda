import React from 'react';
import helpAll from './HelpContentAll.css';
import HelpContent1Element from './HelpContent1Element';



const HelpContentAll = ( props ) => {
    return (
        <div className={helpAll.grid_container}>
        <HelpContent1Element pavadinimas="About My Book App" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Manage Prime" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Device Support" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Returns and Refunds" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Your cart" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Your Orders" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Payments and Gift Cards" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Account Settings" turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
        <HelpContent1Element pavadinimas="Learn how to..." turinys="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!"></HelpContent1Element>
       </div>
    )
};

export default HelpContentAll;
