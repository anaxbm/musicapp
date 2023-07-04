import { useEffect } from 'react'
import './librarysong.scss'

const LibrarySong = ({song, setCurrentSong, playCurrentSong, setPlaySong, currentSong, iconRef, playSong})=>{
    //console.log(songs)
    const songsHandler =  ()=>{
        setCurrentSong(song) 
        setPlaySong(true);
    }

    useEffect(()=>{
        iconRef.current.play();
    },[currentSong])
    
    return (
        <main className='library-song-container' onClick={()=>songsHandler()}>
         <img  className= "song-cover-img" src={song.cover} alt="cover"/>
         <h3 className='song-info'>{song.name}</h3>
         <h4 className='song-info'>{song.artist}</h4>
        </main>
    )
}

export default LibrarySong;