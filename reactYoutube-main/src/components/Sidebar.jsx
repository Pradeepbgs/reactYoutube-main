import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {

    const isMenuOpen = useSelector((state) => state.app.isMenuOpen)
    console.log(isMenuOpen)

    if(!isMenuOpen) return null;

  return (
    <div className='shadow-md w-32 p-3 px-4'>
      <ul className='m-2 font-semibold'>
        <li className='my-2 cursor-pointer'> <Link to='/'>Home</Link> </li>
        <li className='my-2 cursor-pointer'>Shorts</li>
        <li className='my-2 cursor-pointer'>Videos</li>
      </ul>

      <h1 className='font-bold my-4'>Subscriptions</h1>
      <ul className='font-semibold'>
        <li className='my-2 cursor-pointer'>Music</li>
        <li className='my-2 cursor-pointer'>Sports</li>
        <li className='my-2 cursor-pointer'>News</li>
        <li className='my-2 cursor-pointer'>Gaming</li>
      </ul>

      <h1 className='font-bold my-4'>Watch later</h1>
        <ul className='font-semibold'>
        <li className='my-2 cursor-pointer'>Music</li>
        <li className='my-2 cursor-pointer'>Sports</li>
        <li className='my-2 cursor-pointer'>News</li>
        <li className='my-2 cursor-pointer'>Gaming</li>
        </ul>

    </div>
  )
}

export default SideBar
