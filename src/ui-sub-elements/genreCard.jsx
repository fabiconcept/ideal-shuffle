import React from 'react'
import TagCard from './components/tag-card';

const GenreCard = ({songListMetaData , list, tags}) => {
  let temp_list = tags;
  let id = 0;
  let temp_arr = []
  let temp_ta = 0;
  list.forEach(element => {
      songListMetaData.forEach(ele => {
          if (ele.genre.search(element) >= 0) {
              temp_ta++
          }
      });
      temp_arr.push(element, temp_ta)
      temp_ta = 0
  });

  return (
      <div className="main">
          <label>Genre</label>
          <div className="card-tags">
              {list.map(item =>(
                  <TagCard type={"genre"} key={id++} tag ={`${item}`} am ={`(${temp_arr[temp_arr.indexOf(item)+1]})`}/>
              ))}
          </div>
      </div>
  )
}

export default GenreCard