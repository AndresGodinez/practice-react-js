import React from 'react';
import ReactDOM from 'react-dom';
import HomeLayout from './Pages/layouts/home-layout'
import Home from './entries/Home.js'
import Related from './Related/related'

const rootElement = document.getElementById('root');

ReactDOM.render(
    <HomeLayout>
        <Related/>
        <Home/>
    </HomeLayout>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
