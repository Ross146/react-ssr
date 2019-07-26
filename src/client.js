import * as React from 'react';

import {render} from 'app';
import {router} from 'router';
import {reducer} from 'reducer';
import {createStore} from 'redux';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {clientRestoreData} from 'data/clientRestoreData';

function start(state) {
    hydrate(
        <BrowserRouter>
            {render()}
        </BrowserRouter>,

        document.getElementById('root')
    );
}

start();

//let store = createStore(
//    reducer,
//    clientRestoreData()
//);
//start(store)

// router.start()
//    .then((event) => {
//
//      console.log('start', event);
//        start(event);
//    })
//    .catch(error => {
//        console.error(error);
//    });



