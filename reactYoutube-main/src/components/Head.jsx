
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toggleMenu } from '../redux/AppSlice'
import { YOUTUBE_SEARCH_API } from '../redux/constApi'
import cacheResults from '../redux/searchSlice'


function Head() {
  const [searchQuery, setSearchQuery] = useState('')
 const [suggestions, setSuggestions] = useState([])
 const [showSuggestions, setShowSuggestions] = useState(false)

 const dispatch = useDispatch()

 const searchCache = useSelector(state => state.search)

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
          setShowSuggestions(searchCache[searchQuery]) 
      }else{
        searchSuggestion()
      }
  },200)

    return () => {clearTimeout(timer)}

  },[searchQuery])


  const searchSuggestion = async () => {
    console.log('api - '+searchQuery)
     const res = await fetch(YOUTUBE_SEARCH_API+searchQuery)
     const data = await res.json()
     setSuggestions(data.items)
     console.log(data)

     //dispatch in cache
     dispatch(cacheResults({
      [searchQuery]:data.items
     }))
  }


    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className='flex justify-between items-center py-3 px-5 shadow-md'>

      <div className='flex items-center w-fit'>
        
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 mx-4 cursor-pointer'
        src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="Hamburger image" />

        <a href="/">
        <img className=' h-6'
        src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" alt="youtube logo" />
     </a>
      </div>
      <div className='w-fit relative'>
        <div>
        <input 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        className='px-20 py-2 rounded-l-full border border-gray-300'
        type="text" />
        <button
        className='rounded-r-full border border-gray-300 bg-gray-200 py-2 px-4'
        >🔍</button>
        </div>
        {showSuggestions &&<div className='shadow-lg border border-gray-300 absolute bg-white w-full mt-2 rounded-md h-fit'>
          <ul className='ml-11 mt-3 font-semibold'>
            {suggestions.map((items,index) => (
              <li key={index} className='my-3 mx-3'>🔍{items.snippet.title}</li>
            ))}
          </ul>
        </div>}

      </div>
      <div>
        <img className='h-8'
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" alt="" />
      </div>
    </div>
  )
}

export default Head
