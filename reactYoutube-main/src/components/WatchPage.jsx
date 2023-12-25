import { useDispatch } from "react-redux"
import { closeMenu } from "../redux/AppSlice"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import LiveChat from "../components/LiveChat"
function WatchPage() {
   const [searchParams] = useSearchParams()
   console.log(searchParams)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    },[])

  return (
    <div className="px-10 py-7 flex w-full">
      <div>
      <iframe 
      className="rounded-md"
      width="700" 
      height="400" 
      src={"https://www.youtube.com/embed/"+ searchParams.get("v") }
      title="YouTube video player" 
    //   frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
      </iframe>
      </div>
      <div className="w-full">
        <LiveChat />
      </div>
    </div>
  )
}

export default WatchPage
