import React from 'react'

function VideoCard({info}) {
    const {snippet, statistics} = info
    const {title, channelTitle, publishedAt, thumbnails} = snippet
    const {viewCount, likeCount, dislikeCount, favoriteCount, commentCount} = statistics
  return (
    <div className='w-fit m-4'>
      <img src={thumbnails.medium.url} alt="" className='rounded-md ml-3 h-36'/>
      <ul className=' w-60 ml-5'>
        <li className='font-bold'>{title}</li>
        <li className=' opacity-90'>{channelTitle}</li>
        <li className=' opacity-90'>{viewCount} views</li>
      </ul>
     </div>
  )


}

export const redVideoContainer = ({info}) => {
  return <div className='border border-red-600 '>
    <VideoCard info={info}/>
  </div>
}

export default VideoCard
