import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './components/App/App';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(<App />)