import React from "react";
import Playlist from "../../Playlist/Components/Playlist";
import "./Category.css"

function Category(props) {
    return (
        <div className={'category-container'}>
            <div>
                <h6 className={`category-title`}>
                    {props.title}
                </h6>
                <small className={`category-description`}>
                    {props.description}
                </small>
            </div>

            {
                props.playlist.map((playlist) => {
                    return <Playlist {...playlist} key={playlist.id}/>
                })
            }
        </div>
    )
}

export default Category;