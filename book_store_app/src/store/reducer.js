import * as filterActions from './filterActions';   // čia kaip Java enum. išvardini, kad nepadarytum rašymo klaidų jei pvz naudotum String

const initialState = {
    filter: filterActions.ALL_BOOKS,                 // pradinis state
    register: false,
    login: false
};

const reducer = (state = initialState, action) => {     // funcija kuri keičia state (tiksliau nukopijuoja ir tada pakeičia)
    switch ( action.type ) {                            // paprasta switch salyga
        case filterActions.ALL_BOOKS:
            return {
                ...state,                                       // kopijuoja buvusią state, nes kažkodėl geriau nemutuoti state, o daryt kopiją, pakeist ir tada grąžint
                filter: state.filter = filterActions.ALL_BOOKS  // pakeičią tik filter lauką, bet jei būtų dauugiau kitokių laukų, jų neliestų
            };
        case filterActions.MOST_RECENT:
            return {
                ...state,
                filter: state.filter = filterActions.MOST_RECENT
            };
        case filterActions.MOST_POPULAR:
            return {
                ...state,
                filter: state.filter = filterActions.MOST_POPULAR
            };
        case filterActions.FREE_BOOKS:
            return {
                ...state,
                filter: state.filter = filterActions.FREE_BOOKS
            };
        case filterActions.SEARCHED_BOOKS:
            return {
                ...state,
                filter: state.filter = filterActions.SEARCHED_BOOKS
            };
        case filterActions.OPEN_LOGIN:
            console.log("atidaryt login");
            return {
                ...state,
                login: state.login = true,
                register: state.register = false
            };
        case filterActions.CLOSE_LOGIN:
            console.log("uzdaryt login");
            return {
                ...state,
                login: state.login = false
            };
        case filterActions.OPEN_REGISTER:
            console.log("atidaryt register");
            return {
                ...state,
                login: state.login = false,
                register: state.register = true
            };
        case filterActions.CLOSE_REGISTER:
            console.log("uzdaryt register");
            return {
                ...state,
                register: state.register = false
            };
        default:
            return state;
    }
};

export default reducer;