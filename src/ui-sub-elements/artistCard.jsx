import React from 'react'
import SongCard from './components/song-card';
import TagCard from './components/tag-card';

const ArtistCard = ({songListMetaData , list, tags}) => {
  let id = 0;

  return (
      <div className="main">
          <label>Playlist</label>
          <div className="card-tags">
              {list.map(item =>(
                  <SongCard type={"artist"} key={id++} tag ={`${item}`} img={tags[id]}/>
              ))}
          </div>
      </div>
  )
}

export default ArtistCard