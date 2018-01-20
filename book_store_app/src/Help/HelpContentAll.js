import React from 'react';
import helpAll from './HelpContentAll.css';
import HelpContent1Element from './HelpContent1Element';


const HelpContentAll = (props) => {
    return (
        <div className={helpAll.grid_container}>
            <HelpContent1Element name="About My Book App"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Manage Prime"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Device Support"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Returns and Refunds"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Your cart"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Your Orders"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Payments and Gift Cards"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Account Settings"
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
            <HelpContent1Element name="Learn how to..."
                                 content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eaque vero tempore quibusdam autem at eius quas suscipit sed voluptatum sint quaerat architecto porro, id, eum, deleniti, facilis nam hic!" />
        </div>
    )
};

export default HelpContentAll;
