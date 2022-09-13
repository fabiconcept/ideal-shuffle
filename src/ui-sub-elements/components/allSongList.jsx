import React from 'react';
import Nowplaying from '../nowplaying';
import Songlist from './songlist';

const AllSongList = ({songListMetaData, loadedSong, seLoadedSong}) => {
    return (
        <div className="main">
            <label>All Songs</label>
            <Songlist data = {songListMetaData} loadedSong={loadedSong} seLoadedSong={seLoadedSong}/>
            <Nowplaying canplay = {true} seLoadedSong={seLoadedSong} data = {songListMetaData} loadedSong={loadedSong}/>
        </div>
    )
}

export default AllSongList;