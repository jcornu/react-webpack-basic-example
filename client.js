//es6 promise to support promise on every browsers
require('es6-promise').polyfill();
//use fetch as global
require('isomorphic-fetch');

import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

ReactDOM.render(<App />
    , document.getElementById('main')
);
