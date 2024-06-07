import React, { useState } from "react";

const AddVideo =({addVideo})=>{
    const [video, setVideo] = useState(null);
    const handleVideoChange = (event) =>{
        setVideo(event.target.files[0]);
    }
    const handleAddVideo = () =>{
        if(video){
            const videoURL = URL.createObjectURL(video);
            addVideo({name:video.name, url:videoURL});
        };
    }
    return(<>
    <div className="div">
        <input type="file" accept="video/*" onChange={handleVideoChange} />
        <button onClick={handleAddVideo}>Add Video</button>
    </div>
    </>)
}
export default AddVideo