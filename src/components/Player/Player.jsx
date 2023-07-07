import "./playerstyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //component
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
} from "@fortawesome/free-solid-svg-icons"; // icon
import { useState, useEffect, useRef} from "react";


const Player = ({ currentSong, playCurrentSong, iconRef, playSong, setPlaySong, songs, setCurrentSong}) => {
 
  const [songTime, setSongTime] = useState({
    currentTime:0,
    duration: null,
  })

  const playIconSong = useRef(false)
  

  const pauseCurrentSong = () => {
    setPlaySong(false);
    iconRef.current.pause()
  }

 const durationHandler = (e)=>{
  const current= e.target.currentTime
  const duration= e.target.duration
 setSongTime({...songTime, currentTime: current, duration: duration} )
 }

 const timeToMinutes = (timeInSeconds)=> {
  const minutes=  Math.floor(timeInSeconds / 60)
  const seconds =  Math.floor(timeInSeconds % 60)
  
  const padTo2Digits = (num)=> {
    return num.toString().padStart(2, '0');
  }
  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  return (result);
 }

 const draggingSong = (e)=> {
  setSongTime({...songTime, currentTime: e.target.value}) 
  iconRef.current.currentTime = e.target.value
 }

 const fordwardSong = async (direction)=>{
  let currentIndex= songs.findIndex((song)=> song.id === currentSong.id)
 if (direction === "skip-forward"){
  await setCurrentSong(songs[(currentIndex + 1) % songs.length])
  iconRef.current.play();
  console.log("second render")
    setPlaySong(true)
 }
 else if (direction === "skip-back" && currentIndex !== 0){
  await setCurrentSong(songs[currentIndex-1])
  iconRef.current.play();
  console.log("back")
 }}

 useEffect(
  ()=>{
    if (playIconSong.current){
      fordwardSong()
    }
    else {
      playCurrentSong.current= true;
    }
  }, [currentSong]
 )

  return (
    <section className="main-player">
      <div className="play-song-control">
        <h4>{timeToMinutes(songTime.currentTime)}</h4>
        <input className="input-range" type="range" min={0} max={songTime.duration} value={songTime.currentTime} onChange={draggingSong}/>
        <h4>{timeToMinutes(songTime.duration)}</h4>
      </div>
      <div className="player-controls">
        <FontAwesomeIcon icon={faBackwardStep} size="10x" onClick={()=>{fordwardSong("skip-back")}}/>
        {playSong ? (
          <FontAwesomeIcon icon={faCirclePause}  onClick= {pauseCurrentSong}size="10x" />
        ) : (
          <FontAwesomeIcon
            icon={faCirclePlay}
            onClick={playCurrentSong}
            size="10x"
          />
        )}
        <FontAwesomeIcon icon={faForwardStep} size="10x" onClick={()=>{fordwardSong("skip-forward")}} />
      </div>
      <audio src={currentSong.audio} ref={iconRef} onTimeUpdate={durationHandler} onLoadedMetadata={durationHandler}></audio>
    </section>
  );
};

export default Player;
