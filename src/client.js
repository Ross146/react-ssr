import * as React from 'react';

import {render} from 'app';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

function start(state) {
    hydrate(
        <BrowserRouter>
            {render()}
        </BrowserRouter>,

        document.getElementById('root')
    );
}

start();
