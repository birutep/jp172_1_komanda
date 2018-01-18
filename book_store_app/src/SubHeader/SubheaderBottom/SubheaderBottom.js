import React from 'react';
import Knopf from '../../Knopf/Knopf';
import Search from '../../Search/Search';


 const subBottom =() =>{
        return (
        <div>
            <Knopf spausti="All books" clickHandler={ () => console.log(1) }></Knopf>
            <Knopf spausti="Most Recent" clickHandler={() => console.log(2) }></Knopf>
            <Knopf spausti="Most Popular"clickHandler={() => console.log(3)}></Knopf>
            <Knopf spausti="Free Books"clickHandler={() => console.log(4)}></Knopf>
            <Search></Search>
        </div>
    )
};

export default subBottom;



// {/* <SubheaderBottom/> */}