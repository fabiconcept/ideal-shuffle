import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const MobileSidebar = () => {
    const [activeDiv, setActiveDiv] = useState(0)
    const url = useHistory()

    useEffect(() => {
      if (url.location.pathname === "/playlist") {
        setActiveDiv(7)
      }else if (url.location.pathname === "/") {
        setActiveDiv(0)
      }else if (url.location.pathname === "/songs") {
        setActiveDiv(1)
      }else if (url.location.pathname === "/tags") {
        setActiveDiv(2)
      }else if (url.location.pathname === "/mood") {
        setActiveDiv(3)
      }else if (url.location.pathname === "/genre") {
        setActiveDiv(4)
      }else if (url.location.pathname === "/album") {
        setActiveDiv(5)
      }else if (url.location.pathname === "/artist") {
        setActiveDiv(6)
      }
    }, [activeDiv])
    

    return (
        <div className="side">
            <Link to="" className={`${activeDiv===0 && "active"}`} onClick={()=>setActiveDiv(0)}><span>Listen Now</span></Link>
            <Link to="/songs" className={`${activeDiv===1 && "active"}`} onClick={()=>setActiveDiv(1)}><span>Songs</span></Link>
            <Link to="/tags" className={`${activeDiv===2 && "active"}`} onClick={()=>setActiveDiv(2)}><span>Tags</span></Link>
            <Link to="/mood" className={`${activeDiv===3 && "active"}`} onClick={()=>setActiveDiv(3)}><span>Moods</span></Link>
            <Link to="/genre" className={`${activeDiv===4 && "active"}`} onClick={()=>setActiveDiv(4)}><span>Genre</span></Link>
            <Link to="/album" className={`${activeDiv===5 && "active"}`} onClick={()=>setActiveDiv(5)}><span>Album</span></Link>
            <Link to="/artist" className={`${activeDiv===6 && "active"}`} onClick={()=>setActiveDiv(6)}><span>Artist</span></Link>
            <Link to="/playlist" className={`${activeDiv===7 && "active"}`} onClick={()=>setActiveDiv(7)}><span>Playlist</span></Link>
        </div>
    )
}

export default MobileSidebar