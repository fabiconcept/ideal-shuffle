import React from 'react';
import heart from "../img/control/heart.svg";
import heartAlt from "../img/control/heart-alt.svg";
import circle from "../img/control/arrow-circle-up.svg";
import list from "../img/control/list-music.svg";
import mute from "../img/control/volume-mute.svg";
import vol from "../img/control/volume.svg";
import rando from "../img/control/random.svg";
import randoAlt from "../img/control/random-alt.svg";
import backw from "../img/control/backward.svg";
import forw from "../img/control/forward.svg";
import play from "../img/control/play.svg";
import pause from "../img/control/pause.svg";
import repeat from "../img/control/repeat.svg";
import repeatAlt from "../img/control/repeat-alt.svg";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Nowplaying = ({ music, canplay, data, loadedSong, seLoadedSong }) => {
    let shuffle = data;
    const [songToPlay, setcurrentSong] = useState(data);
    let currentSong = songToPlay[loadedSong];

    // if(canplay){
    //     playHandleer()
    // }

    const shuffleArray = arr =>{
        let output = arr.sort(()=>Math.random()-0.5);
        return output;
    }

    
    
    let aud = useRef();
    const [seekBar, setSeekBar] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMute, setIsMute] = useState(false)
    const [isRepeat, setIsRepeat] = useState(true)
    const [isChanged, setIsChanged] = useState(0)
    const [isFav, setIsFav] = useState(true)
    const [isRando, setIsRando] = useState(true)
    const [timerDetail, setTimerDetail] =useState({
        songCurrentPosition: '0:00',
        songTotalTime: '0:00'
    })
    

    useEffect(()=>{
        if (!isRando) {
            const shuffleList = shuffleArray(shuffle);
            setcurrentSong(shuffleList);
            setIsChanged(isChanged + 1);
        }else{
            setcurrentSong(data);
        }
    }, [isRando])

    useEffect(()=>{
        reset()
        aud.current.pause()
        aud.current.load()
        setTimeout(() => {
            document.getElementById("playBtn").click();
        }, 20);
    }, [loadedSong, isChanged])

    const reset = () =>{
        setSeekBar(0);
        setIsPlaying(true);
        setIsMute(false);
        setTimerDetail({
            songCurrentPosition: '0:00',
            songTotalTime: '0:00'
        })
        aud.current.currentTime = 0;
    }

    try {
        setTimeout(() => {
            const lin1 = document.getElementById("lin1");
            const lin2 = document.getElementById("lin2");
            canplay && dragElement(document.getElementById("lin2"));

            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
                elmnt.onmousedown = dragMouseDown;

                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    setIsPlaying(true);
                    aud.current.pause()
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                    let audio = document.getElementById("song");
                    if ((elmnt.offsetLeft - pos1) >= 0.1 && (elmnt.offsetLeft - pos1 <= 363)) {
                        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                        
                        setSeekPosition(((100 / 364) * (elmnt.offsetLeft - pos1)).toFixed())
                        setSeekBar(((100 / 364) * (elmnt.offsetLeft - pos1)).toFixed())
                    }

                }

                function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    aud.current.play()
                    setIsPlaying(false);
                    document.onmousemove = null;

                }
            }

        }, 1);
    } catch (error) {
        console.log(error)

    }

    const nextSong = () =>{
        if (loadedSong <= (data.length - 2)) {
            seLoadedSong(loadedSong+1)
        }else{
            seLoadedSong(0)
        }
    }
    const prevSong = () =>{
        if (loadedSong > 0 && loadedSong <= (data.length - 1)) {
            seLoadedSong(loadedSong - 1)
        }else{
            seLoadedSong((data.length - 1))
        }
    }

    const seekUpdate = () =>{
        let currentMinutes = 0;
        let currentSecounds = 0;
        let durationMinutes = 0;
        let durationSeconds = 0;

        currentMinutes = Math.floor(aud.current.currentTime / 60);
        currentSecounds = Math.floor(aud.current.currentTime - currentMinutes * 60)

        durationMinutes = Math.floor(aud.current.duration / 60);
        durationSeconds = Math.floor(aud.current.duration - durationMinutes * 60)
        
        if(currentMinutes <= 9) {currentMinutes = "0"+currentMinutes}
        if(currentSecounds <= 9) {currentSecounds = "0"+currentSecounds}
        if(durationMinutes <= 9) {durationMinutes = "0"+durationMinutes}
        if(durationSeconds <= 9) {durationSeconds = "0"+durationSeconds}

        // console.log({currentMinutes, currentSecounds, durationMinutes,durationSeconds})

        let songTotalTime = `${durationMinutes}:${durationSeconds}`;
        let songCurrentPosition = `${currentMinutes}:${currentSecounds}`;

        setTimerDetail({songCurrentPosition, songTotalTime})
    }

    const handleSwitch = () => {
        canplay && setIsPlaying(!isPlaying)
        playHandleer()
    }

    const setSeekPosition = (e) =>{
        if ((e/100) < 1) {
            aud.current.currentTime = ((e/100)*aud.current.duration)            
        }
    }

    const playHandleer = () => {
        if (canplay) {
            let audio = document.getElementById("song");
            seekUpdate()
            if (isPlaying && canplay) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    }

    const loopHandler = () => {
        let audio = document.getElementById("song");
        if (isRepeat) {
            audio.loop = false;
        } else {
            audio.loop = true;
        }
    }
    const muteHandler = () => {
        let audio = document.getElementById("song");
        if (isMute) {
            audio.muted = true;
        } else {
            audio.muted = false;
        }
    }

    useEffect(() => {
        muteHandler();
        loopHandler();
    }, [isRepeat, isMute]);

    setInterval(() => {
        let currTime = aud.current?.currentTime;
        let duration = aud.current?.duration;
        if (isPlaying) {
            return
        }else{
            if (duration && currTime && !aud.current.paused) {
                setSeekBar(((100 / duration) * currTime).toFixed())
                seekUpdate()
            }
            if (aud.current.ended) {
                setIsPlaying(true)
                if (loadedSong < (data.length - 1)) {
                    nextSong()
                }
            }
        }
    }, 500);


    return (
        <section className='playing'>
            <span>
                <div className="img"><img src={currentSong.img} alt="" /></div>
                <div className="txt">
                    <div className="title">{currentSong.title}</div>
                    <div className="artist">{currentSong.artist}</div>
                </div>
            </span>
            <span>
                <section>
                    <img src={list} alt="" />
                    <div className="seek">{timerDetail.songCurrentPosition}</div>
                </section>
                <section>
                    <audio id="song" ref={aud}>
                        <source src={currentSong.song} type="audio/ogg" />
                        <source src={currentSong.song} type="audio/mp3" />
                    </audio>
                    <div className="icons">
                        <span className={`rollin ${isRando}`} id='rollin' onClick={() => setIsRando(!isRando)}><img className='play' src={rando} alt="" /><img className='pause' src={randoAlt} alt="" /></span>
                        <span><img src={backw} onClick={prevSong} alt="" /></span>
                        <span className={`rollin ${isPlaying}`} onClick={handleSwitch} id="playBtn"><img src={play} className='play' alt="" /><img className='pause' src={pause} alt="" /></span>
                        <span><img src={forw} onClick={nextSong} alt="" /></span>
                        <span className={`rollin ${isRepeat}`} id='rollin' onClick={() => setIsRepeat(!isRepeat)}><img src={repeat} className="play" alt="" /><img className="pause" src={repeatAlt} alt="" /></span>
                    </div>
                    <div className="seek-line" id='header'>
                        <span id='lin1' style={{ width: `${seekBar}%` }}></span>
                        <span id='lin2' style={{ left: `${!isPlaying && seekBar - 2}%` }}></span>
                    </div>
                </section>
                <section>
                    <span className={`rollin ${isMute}`} id='rollin' onClick={() => setIsMute(!isMute)}><img className='play' src={mute} alt="" /><img className='pause' src={vol} alt="" /></span>
                    <div className="seek">{timerDetail.songTotalTime}</div>
                </section>
            </span>
            <span>
                <span className={`rollin ${isFav}`} id='rollin' onClick={() => setIsFav(!isFav)}><img src={heart} className="pause" alt="" /><img src={heartAlt} className="play" alt="" /></span>
                <img src={circle} alt="" />
            </span>
        </section>
    )
}

export default Nowplaying;