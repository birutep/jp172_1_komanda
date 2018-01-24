import React from 'react';
import searchKlase from './Search.css'


const searchas = ( props ) => {
    return (
        <div className={searchKlase.backColor}>
        <form>
            <input type="text" placeholder="Enter Keywords" name="keywoards" />
            <div className={searchKlase.search_container_button} onClick={props.onClick}><i className="fa fa-search" /></div>
        </form>
        </div>
    )
};

export default searchas;