import React from 'react';
import searchKlase from './Search.css'


const searchas = ( props ) => {
    return (
        <div className={searchKlase.backColor}>
        <form>
            <input className={searchKlase.input} type="text" placeholder="Enter Keywords" name="keywoards" />
            <button className={searchKlase.search_container_button} type="submit"><i className="fa fa-search" /></button>
        </form>
        </div>
    )
};

export default searchas;