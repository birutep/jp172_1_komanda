import React, { Component } from 'react';
import Knopf from '../../Knopf/Knopf';
import Search from '../../Search/Search';

import { connect } from 'react-redux';  // importas norint prijungti bendrą saugyklą prie Component
import * as filterActions from '../../store/filterActions'; // čia kaip Java enum. išvardini, kad nepadarytum rašymo klaidų jei pvz naudotum String

class subBottom extends Component {

    render () {
        return (
            <div>
                <Knopf spausti="All books" onClick={this.props.onAllBooks} />
                <Knopf spausti="Most Recent" onClick={this.props.onMostRecent} />
                <Knopf spausti="Most Popular" onClick={this.props.onMostPopular} />
                <Knopf spausti="Free Books" onClick={this.props.onFreeBooks} />
                <Search />
            </div>                          // onClick iškviečia tam tikrą dispatch
        );
    }
}

const mapStateToProps = state => {  // funkcija kuri perkopijuoja state iš bendros saugyklos į vietinį props
                                    // (galima prie "fltr: state.filter" pridėt daugiau kintamųjų, jeigu jų būtų reducer.js)
    return {
        fltr: state.filter      
    };
};

const mapDispatchToProps = dispatch => {        
    return {
        onAllBooks: () => dispatch({type: filterActions.ALL_BOOKS}),    // dispatch yra funkcija iškviesti reducer.js, kad pakeistų state.
                                                                        // galima po "type: filterActions.ALL_BOOKS" po kablelio perduot reikšmių, jeigu reikia. Ir reducer.js atitinkamai apdoroti. Pvz išsaugot į masyvą kažką.
        onMostRecent: () => dispatch({type: filterActions.MOST_RECENT}),
        onMostPopular: () => dispatch({type: filterActions.MOST_POPULAR}),
        onFreeBooks: () => dispatch({type: filterActions.FREE_BOOKS})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (subBottom);    // prijungia funkcijas (mapStateToProps, mapDispatchToProps) prie komponento
