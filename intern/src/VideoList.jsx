import React, { useState } from "react"

const VideoList = ({videos, bookmarkedVideos, toggleBookMark, openVideo}) =>{
    const [showBookmarked, setShowookmarked] = useState(false);

    const displayedVideos = showBookmarked ? bookmarkedVideos : videos;
    return(
        <div>
            <button onClick={()=>setShowookmarked(!showBookmarked)}>
                {showBookmarked ? 'Show All Videos' : 'Show Bookmarked Videos'}
            </button>
            <ul>
                {displayedVideos.map((video,index) =>(
                    <li key={index}>
                        <span>{video.name}</span>
                        <button onClick={() =>{
                            toggleBookMark(video)}}>
                                {bookmarkedVideos.includes(video)?'unbookmark':'bookmark'}
                            </button>
                            <button onClick={()=>{
                                openVideo(video)
                            }}>Play</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default VideoList;