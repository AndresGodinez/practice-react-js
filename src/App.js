import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        let {title, author, urlImage} = this.props;
        return (
            <div className="Media">
                <div>
                    <img className='media-cover'
                         src={urlImage}
                         width={260}
                         height={160}
                         alt="description item presentation"/>
                    <h3 className={'Media-title'}>{ title }</h3>
                    <p className='Media-author'>{ author}</p>
                </div>
            </div>
        );
    }
}

export default App;
