import React, { useState } from 'react';
import song from "../img/music-alt-song.svg";
import angle from "../img/angle-down.svg";
import tally from "../img/icons/tally.svg";
import music from "../img/icons/music.svg";
import smile from "../img/icons/smile.svg";
import tags from "../img/icons/tags.svg";
import userminus from "../img/icons/user-minus.svg";
import microphoneAlt from "../img/icons/microphone-alt.svg";
import earphone from "../img/earphone.png";
import album from "../img/icons/album-collection.svg";
import mp3 from "../img/icons/mp3-player.svg";
import Recommend from '../ui-sub-elements/recommend';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Sidebar = () => {
  const [activeDiv, setActiveDiv] = useState(0)
  const [menu, setMenu] =useState(true)
  const [library, setLibrary] =useState(true)
  const [recommend, setRecommend] =useState(true)

  const url = useHistory()

  return (
    <div className="sidebar">
      <label className={`${menu ? "on" : "off"}`} onClick={()=>setMenu(!menu)}>Menu <img src={angle} alt="" /></label>
      <ul className={`${menu ? "on" : "off"}`}>
        <Link to="/"><li className={`${activeDiv === 0 && url.location.pathname === "/" && "active"} ${url.location.pathname === "/" && "active"}`} onClick={()=>setActiveDiv(0)}><img src={music} alt="Listen now"/> Listen Now</li></Link>
        <Link to="/tags"><li className={`${activeDiv === 1 && url.location.pathname === "/tags" && "active"} ${url.location.pathname === "/tags" && "active"}`} onClick={()=>setActiveDiv(1)}><img src={tally} alt="Tags"/> Tags</li></Link>
        <Link to="/mood"><li className={`${activeDiv === 2 && "active"} ${url.location.pathname === "/mood" && "active"}`} onClick={()=>setActiveDiv(2)}><img src={smile} alt="Moods"/> Moods</li></Link>
        <Link to="/genre"><li className={`${activeDiv === 3 && url.location.pathname === "/genre" && "active"} ${url.location.pathname === "/genre" && "active"}`} onClick={()=>setActiveDiv(3)}><img src={tags} alt="Genre"/> Genre</li></Link>
      </ul>
      <label className={`${library ? "on" : "off"}`} onClick={()=>setLibrary(!library)}>Library <img src={angle} alt="" /></label>
      <ul className={`${library ? "on" : "off"}`}>
        <Link to="/album"><li className={`${activeDiv === 4 && "active"}`} onClick={()=>setActiveDiv(4)}><img src={album} alt='Album'/> Album</li></Link>
        <Link to="/songs"><li className={`${activeDiv === 5 && "active"}`} onClick={()=>setActiveDiv(5)}><img src={song} alt='Album'/> Songs</li></Link>
        <Link to="/artist"><li className={`${activeDiv === 6 && "active"}`} onClick={()=>setActiveDiv(6)}><img src={userminus} alt='Album'/> Artists</li></Link>
        <Link to="/playlist"><li className={`${activeDiv === 7 && "active"}`} onClick={()=>setActiveDiv(7)}><img src={mp3} alt='Album'/> Playlist</li></Link>
      </ul>
      <label className={`${recommend ? "on" : "off"}`} onClick={()=>setRecommend(!recommend)}>Recommended <img src={angle} alt="" /></label>
      <div className={`recommend  ${recommend ? "on" : "off"}`}>
      <Recommend img={earphone}/>
      </div>
    </div>
  )
}

export default Sidebar;