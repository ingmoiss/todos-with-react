import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/app.js';

//include bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Include css
import "./css/style.css"

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
