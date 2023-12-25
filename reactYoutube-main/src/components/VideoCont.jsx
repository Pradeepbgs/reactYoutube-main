import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../redux/constApi'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

function VideoCont() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  },[])

  const getVideos = async () => {
     const res = await fetch(YOUTUBE_VIDEOS_API)
     const videos = await res.json()

     setVideos(videos.items)
     
  }

  return (
    <div className='flex flex-wrap'>
    { videos[0] && <VideoCard info={videos[0]} key={0} />}
      {
        videos.map((video,index) => {
          return <Link to={'/watch?v='+video.id} key={index} ><VideoCard info={video} key={index}/></Link>
        })
      }
    </div>
  )
}

export default VideoCont
