import React from 'react';
import './App.css';

function App() {

    return (
        <div className="Media">
            <div>
                <img className='media-cover'
                     src="https://source.unsplash.com/260x160/?nature,water"
                     width={260}
                     height={160}
                     alt="description item presentation"/>
                <h3 className='Media-title'>Title</h3>
                <p className='Media-author'>Author</p>
            </div>
        </div>
    );
}

export default App;
