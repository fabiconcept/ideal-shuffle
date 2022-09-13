import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import ListenNow from '../ui-sub-elements/listenNow'
import Tags from '../ui-sub-elements/tags'
import burna from "../img/artists/burnaboy.png";
import songJangele from "../audio/Jagele.mp3";
import songPlayboy from "../audio/Playboy.mp3";
import songCall from "../audio/call.mp3";
import songDisturb from "../audio/Do_Not_Disturb.mp3";
import songLas from "../audio/Last_Last.mp3";
import songLove from "../audio/Love__Damini.mp3";
import songKilo from "../audio/Kilometre.mp3"; 
import songBend from "../audio/bend_you.mp3";
import bur from "../img/artists/burnafull.jpg";
import wizzy from "../img/artists/wizzyfull.jpg";
import omah from "../img/artists/omahfull.jpg";
import fire from "../img/artists/Fireboy.jpeg";
import TagSongList from '../ui-sub-elements/components/tagSongList'
import MoodCard from '../ui-sub-elements/moodCard'
import MoodSongList from '../ui-sub-elements/components/moodSongList'
import GenreCard from '../ui-sub-elements/genreCard'
import GenreSongList from '../ui-sub-elements/components/genreSongList'
import PlaylistCard from '../ui-sub-elements/playlistCard'
import PlaySongList from '../ui-sub-elements/components/playSongList'
import AllSongList from '../ui-sub-elements/components/allSongList'
import ArtistCard from '../ui-sub-elements/artistCard';
import ArtistSongList from '../ui-sub-elements/components/artistSongList';
import AlbumCard from '../ui-sub-elements/albumCard';
import AlbumSongList from '../ui-sub-elements/components/albumSongList';


const Main = () => {
  const [loadedSong, seLoadedSong] = useState(0);

  let tags = [
    {"grammy": 0},
    {"cool": 0},
    {"9ja": 0},
    {"mad": 0}
  ];

  const list = ["grammy", "cool", "9ja", "mad", "zazu"];
  const listMood = ["smile", "dance"];
  const listGenre = ["afrobeats", "R&B"];
  const listPlayList = ["Burna2022", "Youngsters", "Best of Afro", "Just Wizzy"];
  const artistList = ["Burna boy", "Wizkid",  "Fireboy",  "Omah-lay"] ;
  const artImg =[bur, wizzy, fire, omah]
  const albumList = ["Love Damini", "Boy Alone", "Playboy", "wiz22"] ;
  const albumImg =[bur, omah, fire, wizzy]



  const songListMetaData = [
    { id: "01", playlist: "Best of Afro Burna2022", album: "Love Damini", genre: "afrobeats", mood: "smile", tags: "grammy cool", img: bur, title: "Love Damini", time: "2:56", artist: "Burna boy (feat. Ladysmith Black)", song: songLove },
    { id: "02", playlist: "Just Wizzy", album: "wiz22", genre: "R&B", mood: "smile", tags: "grammy cool", img: wizzy, title: "Call me everyday", time: "3:21", artist: "Chris brown feat. Wizkid", song: songCall },
    { id: "03", playlist: "Best of Afro Youngsters", album: "Boy Alone", genre: "R&B", mood: "", tags: "9ja", img: omah, title: "Do not disturb", time: "3:10", artist: "Omah-lay", song: songDisturb },
    { id: "04", playlist: "Best of Afro Burna2022", album: "Love Damini", genre: "afrobeats", mood: "smile dance", tags: "grammy 9ja", img: burna, title: "Jangele", time: "3:10", artist: "Burna boy", song: songJangele },
    { id: "05", playlist: "Best of Afro Burna2022", album: "Love Damini", genre: "afrobeats", mood: "", tags: "grammy 9ja", img: burna, title: "Breakfast", time: "2:51", artist: "Burna boy", song: songLas },
    { id: "06", playlist: "Best of Afro Burna2022", album: "Love Damini", genre: "afrobeats", mood: "dance", tags: "grammy zazu mad", img: burna, title: "Kilometre", time: "3:10", artist: "Burna boy", song: songKilo },
    { id: "07", playlist: "Best of Afro Youngsters", album: "Boy Alone", genre: "R&B", mood: "", tags: "9ja cool", img: omah, title: "Bend You", time: "3:10", artist: "Omah-lay", song: songBend },
    { id: "08", playlist: "Best of Afro Youngsters", album: "Playboy", genre: "R&B", mood: "smile", tags: "9ja", img: fire, title: "Playboy", time: "3:15", artist: "Fireboy", song: songPlayboy }
  ]
  return (
      <div className="">
        <Switch>
          <Route exact path='/'>
            <ListenNow loadedSong ={loadedSong} seLoadedSong={seLoadedSong} songListMetaData={songListMetaData} />
          </Route>
          <Route exact path='/tags'>
            <Tags songListMetaData={songListMetaData} list={list} tags={tags}/>
          </Route>
          <Route exact path='/tags/:id'>
            <TagSongList songListMetaData ={songListMetaData} list={list} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/mood'>
            <MoodCard songListMetaData ={songListMetaData} list={listMood} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/mood/:id'>
            <MoodSongList songListMetaData ={songListMetaData} list={list} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/genre'>
            <GenreCard songListMetaData ={songListMetaData} list={listGenre} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/genre/:id'>
            <GenreSongList songListMetaData ={songListMetaData} list={listGenre} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/playlist'>
            <PlaylistCard songListMetaData ={songListMetaData} list={listPlayList} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/artist'>
            <ArtistCard songListMetaData ={songListMetaData} list={artistList} tags={artImg} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/artist/:id'>
            <ArtistSongList songListMetaData ={songListMetaData} list={listPlayList} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/album'>
            <AlbumCard songListMetaData ={songListMetaData} list={albumList} tags={albumImg} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/album/:id'>
            <AlbumSongList songListMetaData ={songListMetaData} list={listPlayList} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/songs'>
            <AllSongList songListMetaData ={songListMetaData} list={listPlayList} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
          <Route exact path='/playlist/:id'>
            <PlaySongList songListMetaData ={songListMetaData} list={listPlayList} tags={tags} loadedSong ={loadedSong} seLoadedSong={seLoadedSong}/>
          </Route>
        </Switch>
      </div>
  )
}

export default Main