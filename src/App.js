import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
    state = {
        author:this.props.author,
    }

    test = (e) => {
        console.log(this.props.title);
        console.log(e);
        this.setState({
            author: 'the author was changed'
        })
    }


    render() {
        let {title, urlImage} = this.props;
        console.log(this);

        return (
            <div className="Media" onClick={this.test}>
                <div>
                    <img className='media-cover'
                         src={urlImage}
                         width={260}
                         height={160}
                         alt="description item presentation"/>
                    <h3 className={'Media-title'}>{title}</h3>
                    <p className='Media-author'>{this.state.author}</p>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default App;
