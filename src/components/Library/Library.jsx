import LibrarySong from '../LibrarySong/LibrarySong'
import './library.scss'

const Library = ({songs, currentSong, setCurrentSong, iconRef, playCurrentSong, setPlaySong, playSong})=>{
    return (
        <div>
        <h2 className='library-title'>Library</h2>
        <section className='library-songs'>
           { songs.map( (song) =>{
            // set prop of song equal to every song object 
            return <LibrarySong song={song}  songs= {songs} key={song.id}  currentSong={currentSong} setCurrentSong= {setCurrentSong} id= {song.id} iconRef= {iconRef} playCurrentSong= {playCurrentSong} setPlaySong= {setPlaySong}/> })}   
        </section>
        </div>
    )
}
export default Library