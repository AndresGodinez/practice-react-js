import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Playlist from './Playlist/Components/Playlist';
import data from './Playlist/Data/api.json'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Playlist data={data} /> ,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
