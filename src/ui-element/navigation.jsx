import React from 'react';
import music from "../img/music-alt.svg";
import search from "../img/search.svg";
import arrowLeft from "../img/arrow-to-left.svg"
import arrowRight from "../img/arrow-to-right.svg"

const Navigation = () => {
  return (
    <div className="navigate">
      <div className="logo"><img src={music} alt="" /> iShuffle</div>
      <div className="right-part">
        <div className="nav-arrows">
          <img src={arrowLeft} alt="" />
          <img src={arrowRight} alt="" />
        </div>
        <div className="search">
          <img src={search} alt="" />
          <input type="search" placeholder='Search...' name="" id="" />
        </div>
      </div>
    </div>
  )
}

export default Navigation