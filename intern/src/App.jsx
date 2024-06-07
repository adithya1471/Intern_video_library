import react, { useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
import VideoPlayerPopup from "./VideoPlayerPopup";
import './App.css'

const App = () =>{
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const addVideo = (video) =>{
    setVideos([...videos, video]);
  };
  const toggleBookMark = (video)=>{
    const updatedBookmarkedVideos = bookmarkedVideos.includes(video)? 
    bookmarkedVideos.filter((v)=>v!==video):[...bookmarkedVideos, video];
    setBookmarkedVideos(updatedBookmarkedVideos);
  }
  const openVideo = (video) =>{
    setCurrentVideo(video);
  }
  const closeVideo = ()=>{
    setCurrentVideo(null);
  }
  return(<>
  <div className="div">
    <h1><i>React Intern Project</i></h1>
    <h2><i>Video Library</i></h2>
  <AddVideo addVideo={addVideo}/>
  <VideoList 
  videos={videos}
  bookmarkedVideos={bookmarkedVideos}
  toggleBookMark={toggleBookMark}
  openVideo={openVideo}/>
{currentVideo&&(
  <VideoPlayerPopup video={currentVideo}
  closeVideo={closeVideo} />
)}
  </div>
  </>)
}
export default App