import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>
const mySecondElement = <h2>Hello Again!</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(myFirstElement);
root.render(myFirstElement);
root2.render(mySecondElement);