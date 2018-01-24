import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';

import {createStore} from 'redux';      // importas norint sukurt bendrą projekto state saugyklą
import {Provider} from 'react-redux';   // importas norint paduot saugyklą projektui
import reducer from './store/reducer';  // importas su funkcija pakeisti saugyklos state


const store = createStore(reducer);     // sukuriam naują bendrą state saugyklą

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>), document.getElementById('root')); // reikia "apvilkt" App su <Provider />
                                                    // ir per provider perduot store (bendrą saugyklą)
registerServiceWorker();
