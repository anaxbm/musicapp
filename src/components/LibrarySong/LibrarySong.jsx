import { useEffect, useRef } from 'react'
import './librarysong.scss'

const LibrarySong = ({song, setCurrentSong, setPlaySong, iconRef})=>{
    //console.log(songs)
    //cuándo hagan click a songContainer ejecute el setPlaySong a true y play
    const songsHandler =  async ()=>{
        await setCurrentSong(song) 
        setPlaySong(true);
        iconRef.current.play();
    }
    
    return (
        <main className='library-song-container'  onClick={()=>songsHandler()}>
         <img  className= "song-cover-img" src={song.cover} alt="cover"/>
         <h3 className='song-info'>{song.name}</h3>
         <h4 className='song-info'>{song.artist}</h4>
        </main>
    )
}

export default LibrarySong;