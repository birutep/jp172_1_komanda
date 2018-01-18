import React from 'react';
import Knopf from '../../Knopf/Knopf';
import Search from '../../Search/Search';

const subBottom = ( props ) => { 
    return (
        <div>
           <Knopf spausti="All books"></Knopf>
           <Knopf spausti="Most Recent"></Knopf>
           <Knopf spausti="Most Popular"></Knopf>
           <Knopf spausti="Free Books"></Knopf>
           <Search></Search>
        </div>
    )
};

export default subBottom;


// {/* <SubheaderBottom/> */}