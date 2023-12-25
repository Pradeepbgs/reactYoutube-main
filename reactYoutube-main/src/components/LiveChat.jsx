import React, {useEffect} from 'react'
import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/ChatSlice';
import { generateRandomName, randomText } from './RandomName';

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((state)=>state.chat.messages)
  
    useEffect(() => {
      const i = setInterval(()=>{
        // console.log("Hello")
        dispatch(addMessage({
          name:generateRandomName(),
          message:randomText(20)
        }))
      },500)
  
      return () => clearInterval(i);
    },[])

  return (
    <div 
    className='bg-gray-100 h-full w-96 rounded-md ml-20 p-3 border border-black overflow-y-scroll flex flex-col-reverse'>
        <div className='h-9 flex flex-col-reverse'>
      {
        chatMessages.map((m,index)=>(
            <ChatMessages key={index} name={m.name} message={m.message}/>
        ))
      }
      </div>
    </div>
  )
}

export default LiveChat
