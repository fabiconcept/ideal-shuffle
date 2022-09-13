import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = ({tag, img, type}) => {
  return (
    <div className="tagImg"><Link to={`/${type}/${tag}`}><img src={img} alt="" /> <span>{tag}</span></Link></div>
  )
}

export default SongCard;