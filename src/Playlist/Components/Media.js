import React from 'react';
import '../Css/components/Media.css';

import PropTypes from 'prop-types';

function Media(props) {

    let {title, author, cover} = props;

    return (
        <div className="Media">
            <div>
                <img className='media-cover'
                     src={cover}
                     width={260}
                     height={160}
                     alt="description item presentation"/>
                <h3 className={'Media-title'}>{title}</h3>
                <p className='Media-author'>{author}</p>
            </div>
        </div>
    );
}

Media.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;
