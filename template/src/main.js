import '@babel/polyfill'
import 'B/assets/css/reset.css';
/* react*/
import React from 'react';
import { render } from 'react-dom';
import App from 'C/app';


render(<App />,
document.getElementById('app'));


/* webpack hot reload*/
if (module.hot) {
    module.hot.accept();
}
