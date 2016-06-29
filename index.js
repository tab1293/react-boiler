import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const mount = document.getElementById('mount');
ReactDom.render(<App />, mount);
