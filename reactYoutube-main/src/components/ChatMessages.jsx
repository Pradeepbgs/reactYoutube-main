import React from 'react'

const ChatMessages = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 mb-2 '>
        <img className='h-6'
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png" 
        alt="" 
        />
      <span className='font-bold'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessages
