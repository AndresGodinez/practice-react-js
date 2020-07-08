import React from "react";
import Media from "./Media";
import playlist from "../Css/components/Playlist.css"

function Playlist(props) {
    return (
        <div className={'playlist-container'}>
            {
                <Media {...props} />
            }
        </div>
    );
}

export default Playlist;