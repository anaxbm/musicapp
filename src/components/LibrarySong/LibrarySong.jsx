import './librarysong.scss'

const LibrarySong = ({song})=>{
    return (
        <main className='library-song-container'>
         <img  className= "song-cover-img" src={song.cover} alt="cover"/>
         <h3 className='song-info'>{song.name}</h3>
         <h4 className='song-info'>{song.artist}</h4>
        </main>
    )
}

export default LibrarySong;