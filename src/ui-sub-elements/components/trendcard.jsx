import React from 'react';

const Trendcard = ({img, artist, rank}) => {
  return (
    <div className="trendcard">
        <span>
          <div className="light">Playlist</div>
          <div className="title">Top #{rank} Songs Of the Week</div>
          <span><div className="light">Featuring</div> {artist}</span>

          <div className="buts">
            <div className="but filled"> Play</div>
          </div>
        </span>
        <span><img src={img} alt="" /></span>
    </div>
  )
}

export default Trendcard;