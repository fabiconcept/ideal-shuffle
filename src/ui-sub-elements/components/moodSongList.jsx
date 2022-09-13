import React from 'react';
import { useParams } from 'react-router-dom';
import Nowplaying from '../nowplaying';
import Songlist from './songlist';

const MoodSongList = ({songListMetaData, loadedSong, seLoadedSong}) => {
    const {id} = useParams()

    const songToShow = songListMetaData.filter(item => (item.mood).search(id) >= 0);

    let d = 0;
    let tagss = songToShow.map(item =>{
        return {...item, id: `0${(d++)+1}`}
    }) 

    return (
        <div className="main">
            <label>#{id}</label>
            <Songlist data = {tagss} loadedSong={loadedSong} seLoadedSong={seLoadedSong}/>
            <Nowplaying canplay = {true} seLoadedSong={seLoadedSong} data = {tagss} loadedSong={loadedSong}/>
        </div>
    )
}

export default MoodSongList;