import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='p-1 px-4 rounded-md bg-gray-200 mx-2 my-3'>{name}</button>
    </div>
  )
}

export default Button
