import React from 'react';
import { Link } from 'react-router-dom';

const TagCard = ({tag, am, type, tagtype}) => {
  return (
    <div className="tag"><Link to={`/${type}/${tag}`}>{tagtype}{tag} {am}</Link></div>
  )
}

export default TagCard;