import React, { useState } from 'react';
import burna from "../img/artists/burnaboy.png";
import wiz from "../img/artists/wizzy.png";
import Songlist from './components/songlist';
import angle from "../img/angle-down.svg";
import Trendcard from './components/trendcard';
import Nowplaying from './nowplaying';

const ListenNow = ({songListMetaData, loadedSong, seLoadedSong}) => {

  let num = 0;

  const data = [
    {img: wiz, artist: "Wizkid", rank: "1"},
    {img: burna, artist: "Burna Boy", rank: "2"}, 
    {img: burna, artist: "Burna Boy", rank: "3"}, 
    {img: wiz, artist: "Wizkid", rank: "4"}, 
    {img: burna, artist: "Burna Boy", rank: "5"} 
  ]


  return (
    <div className="main">
        <section>
            <label>Trending</label>
            <div className="trend-cards">
              {data.map(item =>(
                <Trendcard key={num++} img ={item.img} artist = {item.artist} rank={item.rank}/>
              ))}
            </div>
        </section>
        <section>
            <label><span>Top Picks</span> </label>
            <Songlist extra='lis' data = {songListMetaData} loadedSong={loadedSong} seLoadedSong={seLoadedSong}/>
        </section>
        <Nowplaying canplay = {true} seLoadedSong={seLoadedSong} data = {songListMetaData} loadedSong={loadedSong}/>
    </div>
  )
}

export default ListenNow