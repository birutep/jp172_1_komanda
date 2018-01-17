import React from 'react';
import SubHeader from '../SubHeader/SubHeader';

import knygos from '../data/books.json';
import Knyga from '../DivaiKnygomsAtvaizduot/DivKnyga1/DivKnyga1';

const Browse = ( props ) => {
    return (
        <div>
            <SubHeader />
            <Knyga img={knygos[0].img} title={knygos[0].title} author={knygos[0].author} rating={knygos[0].rating}/>
            <Knyga img={knygos[1].img} title={knygos[1].title} author={knygos[1].author} rating={knygos[1].rating}/>
            <Knyga img={knygos[2].img} title={knygos[2].title} author={knygos[2].author} rating={knygos[2].rating}/>
        </div>
    )
};

export default Browse;
