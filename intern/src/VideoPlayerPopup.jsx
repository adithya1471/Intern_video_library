import React from "react";

const VideoPlayerPopup = ({video, closeVideo}) =>{
    return(
        <div className="video-popup">
            <video controls src={video.url} autoPlay />
            <button onClick={closeVideo}>Close</button>
        </div>
    )
}
export default VideoPlayerPopup;