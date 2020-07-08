import React from "react";
import Playlist from "../Playlist/Components/Playlist";
import category from "./Category.css"

function Category(props) {
    return(
        <div className={'category-container'}>
            <p>
                {props.title}
            </p>
            {
                props.playlist.map((playlist) => {
                    return <Playlist {...playlist} key={playlist.id}/>
                })
            }
        </div>
    )
}

export default Category;